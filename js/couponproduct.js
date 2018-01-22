/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {
    var couponId = getSearch('couponId');
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getcouponproduct',
        data: {couponid:couponId},
        success: function (info) {
            console.log(info);
            $('.product').html(template('tpl_list', info));
            $('.mui-slider-group').html(template('tpl_slider', info));

        }
    });

    $('.product').on('click','.btn_right',function () {
        var id= $(this).data('id');
        console.log(id);
        $('.mask').show();
        mui(".mui-slider").slider().gotoItem(id);

        //var  itemWidth= $('.mui-slider-item').width();
        //$('.mui-slider-group').css({
        //    left:-id*itemWidth
        //})


    })
    $('.mask_left').on('click',function () {
        mui(".mui-slider").slider().prevItem();
    })
    $('.mask_right').on('click',function () {
        mui(".mui-slider").slider().nextItem();
    })

});