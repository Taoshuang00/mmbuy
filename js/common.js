/**
 * Created by ts on 2018/1/19 0019.
 */
    //回到顶部
    $('.btn-top').on('click',function () {
        $(window).scrollTop(0);
    });
function getSearchObj() {
    var search = location.search;
    search = decodeURI(search).slice(1);
    var obj = {};
    var temp = search.split('&');
    for(var i = 0; i < temp.length; i++) {
        var key = temp[i].split('=')[0];
        var value = temp[i].split('=')[1];
        obj[key] = value;
    }
    return obj;
};
function getSearch(key) {
    return getSearchObj()[key];
}