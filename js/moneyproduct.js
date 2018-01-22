/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    var productid = getSearch('productId');
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getmoneyctrlproduct',
        data: {productid: productid},
        success: function (info) {
            console.log(info.result[0]);
            $('.mmb_content').html(template('tpl_product', info.result[0]))
        }
    })


});