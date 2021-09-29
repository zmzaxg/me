// qq 二维码 随机排序
$(document).ready(function(){$(".qqlink").each(function(){if(parseInt(Math.random()*8)==0)$(this).prependTo($(this).parent());});});
$(document).ready(function(){$(".qq_ewm").each(function(){if(parseInt(Math.random()*8)==0)$(this).prependTo($(this).parent());});});

//返回顶部
$(function() {
    $('#back-top').hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#back-top').fadeIn(1000);
        } else {
            $("#back-top").fadeOut(1000);
        }
    });
    $("#back-top").click(function() {
        $('body,html').animate({
            scrollTop: '0'
        }, 1000);
        return false;
    })
})