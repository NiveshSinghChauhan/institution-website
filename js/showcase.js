$(document).ready(function() {

  var find = 0;

  $('.bubble-1').click(function() {

      $('.bubble').css("display","none");
      $('#case-1').css("display","block");
      $('.exit').css({"display":"block","color":"rgba(255,248,220,0.4)"});
      $('.section-case').css({"height":"617px","padding-bottom": "100px"})
      find = 1;

  });
  $('.bubble-2').click(function() {

      $('.bubble').css("display","none");
      $('#case-2').css("display","block");
      $('.exit').css({"display":"block","color":"rgba(128,0,0,.4)"});
      $('.section-case').css({"height":"617px","padding-bottom": "100px"})

  });
  $('.exit').click(function(){

    $('.bubble').css("display","flex");
    $('.exit').css("display","none");
    $('.section-case').css({"height":"0","padding-bottom": "0"})
    if (find == 1) {
      $('#case-1').css("display","none");
      find = 0;
    }else {
      $('#case-2').css("display","none");
      find = 0;
    }

  });

});
