/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getindexmenu',
        dataType:'json',
        success:function (info) {
            console.log(info);
            $('.nav').html(template('tpl_nav',info))
        }
    });
    $('.nav').on('click','.nav_more',function (e) {
        e.preventDefault();
        $('.nav_hide').toggle()
    })

    //
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getmoneyctrl',
        dataType:'json',
        success:function (info) {
            console.log(info);
            $('.content').html(template('tpl_con',info))
        }
    });


});