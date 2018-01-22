/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    $('.mui-table-view').on('click','.title',function () {
        $(this).toggleClass('mui-active');

    });
    //分类标题
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getcategorytitle',
        success:function (info) {
            //console.log(info);
            $('.mui-table-view ').html(template('tpl_title',info))
            render()
        }
    });

    function render() {
        var info =  $('.info');
        info.each(function (i,e) {
            var $this = $(this);
            //分类列表
            $.ajax({
                type:'get',
                url:'http://localhost:9090/api/getcategory',
                data:{titleid:$this.data('titleid')},
                success:function (info) {
                    //console.log(info);
                    $this.html(template('tpl_list',info))
                }
            })
        });

    }



});