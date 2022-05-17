window.onload = function () {
var button1 = document.getElementById("switchTheme");
var buffer=$("bufferIn");
var img = document.getElementById("showOff");

//创建一个数组，用来保存图片的路径
var imgArr = ["img/banner_day.jpg","img/banner_night.jpg"];
var index=0;

button1.onclick = function () {

    //主图改变
    index++;
    if (index > (imgArr.length - 1)) {
        index = 0;
    }
    img.src = imgArr[index];

   


}
  //主题色改变
    $(document).ready(function () {
        var flag=1;
        $("#switchTheme").click(function () {
            if(flag==1)
            {
       $("nav").removeClass("navbar-default").addClass("navbar-inverse");
       $(".page").css("background-color","black");
    flag=0;     
                $("#switchTheme a").html("LIGHT");
            }else{
            $("nav").removeClass("navbar-inverse").addClass("navbar-default"); 
                flag = 1;
                $("#switchTheme a").html("DARK");
                $(".page").css("background-color", "white");
            }}
    
    );
        
        
    });
    
 
}