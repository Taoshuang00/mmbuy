/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getgsshop',
        success:function (info) {
            //console.log(info);
            $('#shop').html(template('tpl_shop',info));
        }
    });
   $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getgsshoparea',
        success:function (info) {
            //console.log(info);
            $('#area').html(template('tpl_area',info));
        }
    });
    var areaId = +$("#shop").val();
    var shopId = +$('#area').val();
    render()
   function render() {
       $.ajax({
           type:'get',
           url:'http://localhost:9090/api/getgsproduct',
           data:{
               shopid:shopId ,
               areaid:areaId

           },
           success:function (info) {
               //console.log(info);
               $('.gsProduct').html(template('tpl_gsProduct',info));
           }
       });
   }

    $('#shop').on('change', function () {
        shopId = +$(this).val();
        render()
    });
    $('#area').on('change', function () {
        areaId = +$(this).val();
        render()
    });
});