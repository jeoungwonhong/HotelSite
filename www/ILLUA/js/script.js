$(function(){

    $(".fadeIn").children("img:gt(0)").hide();
        var current = 0;

        setInterval(myFade,3000);

        function myFade(){
            var next = (current +1) % 4;
            $(".fadeIn").find("img").eq(current).fadeOut(300);
            $(".fadeIn").find("img").eq(next).fadeIn(300);
            current = next;
        };
});
