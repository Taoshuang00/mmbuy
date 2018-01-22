/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    var categoryid = getSearch('categoryId');
    var pageid = getSearch('pageId');
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getcategorybyid',
        data: {categoryid: categoryid},
        success: function (info) {
            console.log(info)
            $('.categoryName').text(info.result[0].category);
        }
    })
    //分页渲染
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getproductlist',
        data: {
            categoryid: categoryid,
            pageid: pageid
        },
        success: function (info) {
            console.log(info);
            $('.mui-table-view').html(template('tpl_list', info))
            $('.pageNum').html(template('tpl_select', info));
            console.log(pageid);
            $('.pageNum').val(pageid);
        }
    })


    $('.pageNum').on('change', function () {
        pageid = $(this).val();
        console.log(pageid);
        location.href = 'productlist.html?categoryId=' + categoryid +  '&pageId=' + pageid
    })
});