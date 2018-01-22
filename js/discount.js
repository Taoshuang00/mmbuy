/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    var productid = getSearch('productId');
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getdiscountproduct',
        data: {productid: productid},
        success: function (info) {
            console.log(info);
            $('.mmb_content').html(template('tpl_product', info.result[0]))
        }
    })


});