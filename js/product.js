/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    var productId = getSearch('productid');
    var categoryId = getSearch('categoryId') ;
    $('.productlist').on('click',function () {
        location.href = "productlist.html?categoryId="+categoryId+"&pageId=1"
    })
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getcategorybyid',
        data: {categoryid: categoryId},
        success: function (info) {
            console.log(info);
            $('.productlist').html(info.result[0].category+'&gt;');
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getproduct',
        data: {productid: productId},
        success: function (info) {
            //console.log(info);
            $('.product').html(template('tpl_product', info.result[0]))
            $('.product_buy').html(info.result[0].bjShop);
            var str = info.result[0].productName.split(" ")[0];
            $('.categoryName').text(str)
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getproductcom',
        data: {
            productid: productId
        },
        success: function (info) {
            //console.log(info);
            $('.com-list').html(template('tpl_com', info))

        }
    })

});