/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {



    var ul = $('#wrapper>ul');
    var pageid = getSearch("pageId");
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getbaicaijiatitle',
        dataType:'json',
        data:{
            pageid:2
        },
        success:function (info) {
            console.log(info);
            ul.html(template('tpl_nav',info));
            var lis = ul.find('li');
            var width = 0;
            lis.each(function (i,e) {
                width += e.offsetWidth ;
            })

            ul.width(width +1 );
            var myScroll = new IScroll('#wrapper', {
                scrollX:true,
                scrollY:false
            });
        }
    });
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getbaicaijiaproduct',
        dataType:'json',
        data:{
            titleid :2
        },
        success:function (info) {
            console.log(info);
            $('.content').html(template('tpl_con',info));
        }
    });

});