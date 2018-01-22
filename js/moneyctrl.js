/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {
    var pageid = getSearch("pageId");
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getmoneyctrl',
        dataType:'json',
        data:{
            pageid:pageid
        },
        success:function (info) {
            console.log(info);
            var num =Math.ceil( info.totalCount/info.pagesize)
            info.num= num;
            $('.content').html(template('tpl_con',info));
            $('.pageNum').html(template('tpl_select', info));
            $('.pageNum').val(pageid);
        }
    });
    console.log(pageid);

    $('.pageNum').on('change', function () {
        pageid = $(this).val();
        location.href = 'moneyctrl.html?pageId=' + pageid
    })
});