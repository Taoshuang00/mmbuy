/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    //标题渲染
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getbrandtitle',
        success:function (info) {
            console.log(info);
            $('.mui-table-view ').html(template('tpl_title',info))
        }
    });


});