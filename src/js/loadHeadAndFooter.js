/*定义加载头部与尾部的模块*/
define(["jquery","cookie"],function($){
    $(function(){
        /*加载头部*/
        $("header").load("/html/include/header.html",function(){
            $(".zt",".headerz").hover(function(){
                $(".header1",".headerx").css({"display":"block"});
            },function(){
                setTimeout(function(){$(".header1",".headerx").css({"display":"none"})},4000);
            });
            $(".fl",".headerz").hover(function(){
                $(".header2",".headerx").css({"display":"block"});
            },function(){
                setTimeout(function(){$(".header2",".headerx").css({"display":"none"})},4000);
            });
        });
            
        /*加入尾部*/
        $("footer").load("/html/include/footer.html",function(){

        });
    });
});
