/*定义加载头部与尾部的模块*/
define(["jquery","cookie"],function($){
    $(function(){
        /*加载头部*/
        $("header").load("/html/include/header.html",function(){

        });
        /*加入尾部*/
        $("footer").load("/html/include/footer.html",function(){
            
        });
    });
});
