/**
 * Created by ts on 2018/1/19 0019.
 */
$(function () {

    //品牌标题对应的十大品牌
    var brandTitle = getSearch('brandTitle').split("十")[0]
    var brandTitleId = getSearch('brandTitleId');
    $('.cate').text(brandTitle);
    //var categoryName = getSearch('categoryName');
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getbrand',
        data: {
            brandtitleid: brandTitleId,
           },
        success: function (info) {
            console.log(info);
            info.brandTitle = brandTitle
            $('.brand').html(template('tpl_brand',info))
        }
    })
    //销量排行商品列表
    $.ajax({
        type: 'get',
        url: 'http://localhost:9090/api/getbrandproductlist',
        data: {
            brandtitleid: brandTitleId,
            pagesize: 4
        },
        success: function (info) {
            info.brandTitle = brandTitle;
            console.log(info);
            $('.sales').html(template('tpl_sales',info))
            productid = $('.other').data('id');
            console.log(productid);
        }
    });
    //商品的评论
    render();
    var productid;
    var product;
    function render() {

        $.ajax({
            type: 'get',
            url: 'http://localhost:9090/api/getproduct',
            data: {
                productid: productid||1
            },
            success: function (info) {
                product = info.result[0];
            }
        });
        $.ajax({
            type: 'get',
            url: 'http://localhost:9090/api/getproductcom',
            data: {
                productid: productid ||1
            },
            success: function (info) {
                info.product = product;
                console.log(info);
                $(".comment").html(template('tpl_comment',info))
            }
        });
    }

    $(".sales").on("click",'.btn_com',function (e) {
        productid = $(this).parent().data('id');
        e.preventDefault()
        console.log(11);
        //render()
    })
});

