$(document).ready(function(){

  var temp;

  $(".img").click(function(){
    var src = $(this).attr("class");
    console.log(src);

  });

  $(".img").hover(function(){
    console.log( $(this).attr("class").split(" ")[1] );
    $(this).addClass("hover");
    $(this).css("opacity","1");
    $(this).css("z-index","2");
    if (!temp) {
      console.log("not");

      if ($(this).attr("class").split(" ")[1] == "img-1") {
        $(".text-1").css("display","block");
        temp = "text-1";
      }else if ($(this).attr("class").split(" ")[1] == "img-2") {
        $(".text-2").css("display","block");
        temp = "text-2";
      }else if ($(this).attr("class").split(" ")[1] == "img-3") {
          $(".text-3").css("display","block");
          temp = "text-3";
      }else if ($(this).attr("class").split(" ")[1] == "img-4") {
          $(".text-4").css("display","block");
          temp = "text-4";
      }else if ($(this).attr("class").split(" ")[1] == "img-5") {
        $(".text-5").css("display","block");
        temp = "text-5";
      }else if ($(this).attr("class").split(" ")[1] == "img-6") {
        $(".text-6").css("display","block");
        temp = "text-6";
      }else if ($(this).attr("class").split(" ")[1] == "img-7") {
        $(".text7").css("display","block");
        temp = "text-7";
      }else if ($(this).attr("class").split(" ")[1] == "img-8") {
        $(".text-8").css("display","block");
        temp = "text-8";
      }else if ($(this).attr("class").split(" ")[1] == "img-9") {
        $(".text-9").css("display","block");
        temp = "text-9";
      }else if ($(this).attr("class").split(" ")[1] == "img-10") {
        $(".text-10").css("display","block");
        temp = "text-10";
      }else if ($(this).attr("class").split(" ")[1] == "img-11") {
        $(".text-11").css("display","block");
        temp = "text-11";
      }else if ($(this).attr("class").split(" ")[1] == "img-12") {
        $(".text-12").css("display","block");
        temp = "text-12";
      }

    }else {
      $("."+temp+"").css("display","none");

      if ($(this).attr("class").split(" ")[1] == "img-1") {
        $(".text-1").css("display","block");
        temp = "text-1";
      }else if ($(this).attr("class").split(" ")[1] == "img-2") {
        $(".text-2").css("display","block");
        temp = "text-2";
      }else if ($(this).attr("class").split(" ")[1] == "img-3") {
          $(".text-3").css("display","block");
          temp = "text-3";
      }else if ($(this).attr("class").split(" ")[1] == "img-4") {
          $(".text-4").css("display","block");
          temp = "text-4";
      }else if ($(this).attr("class").split(" ")[1] == "img-5") {
        $(".text-5").css("display","block");
        temp = "text-5";
      }else if ($(this).attr("class").split(" ")[1] == "img-6") {
        $(".text-6").css("display","block");
        temp = "text-6";
      }else if ($(this).attr("class").split(" ")[1] == "img-7") {
        $(".text-7").css("display","block");
        temp = "text-7";
      }else if ($(this).attr("class").split(" ")[1] == "img-8") {
        $(".text-8").css("display","block");
        temp = "text-8";
      }else if ($(this).attr("class").split(" ")[1] == "img-9") {
        $(".text-9").css("display","block");
        temp = "text-9";
      }else if ($(this).attr("class").split(" ")[1] == "img-10") {
        $(".text-10").css("display","block");
        temp = "text-10";
      }else if ($(this).attr("class").split(" ")[1] == "img-11") {
        $(".text-11").css("display","block");
        temp = "text-11";
      }else if ($(this).attr("class").split(" ")[1] == "img-12") {
        $(".text-12").css("display","block");
        temp = "text-12";
      }

    }
    console.log(temp());
},
  function(){
    $(this).removeClass("hover");
    $(this).css("opacity","(0.8)");
    var item = $(this);
    setTimeout(function( items = item ) {
      $(item).css("z-index","1");
    },500);

  });


});
