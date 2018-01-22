/**
 * Created by ts on 2018/1/20 0020.
 */
$(function () {

    //var productid = getSearch('productId') || 122;
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getinlanddiscount',
        data: {productid: 12},
        success: function (info) {
            console.log(info);
            $('.mmb_content').html(template('tpl_con', info))
        }
    })


});