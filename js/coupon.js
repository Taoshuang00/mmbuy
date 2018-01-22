/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getcoupon',
        success: function (info) {
            console.log(info);
           $('.content').html(template('tpl_con',info));
        }
    })
});