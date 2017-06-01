$('.button').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.modal-header span').eq(stepIndex);
      console.log("object=",$btn);
      console.log("step=",$step);
      console.log("index=",stepIndex);

  if(stepIndex === 7) { step3($step, $pag);  }
  else {step1($step, $pag); }

});


function step1($step, $pag){
// console.log('step1');
  // animate the step out
  $step.addClass('animate-out');

  // animate the step in
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('is-active')
          .next().addClass('is-active');
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');

  }, 1200);
}


function step3($step, $pag){
console.log('3');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
        $('.message').css('display', 'block');
    $('.rerun-button').css('display', 'inline-block');
  }, 300);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
                  .find('.modal-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

    $('.modal-header span').first().addClass('is-active')
                          .siblings().removeClass('is-active');

    $('.message').css('display','none');

 $(this).hide();
});

var startjump = setInterval(function() {
  jump();
  // jump2();
},5000);

function jump() {
  $(".note").css({"top":"-35px","box-shadow":"0px 30px 30px -20px rgba(200,0,0,0.5)"});
  setTimeout(function(){
    $(".note").css({"top":"0px","box-shadow":"none"});
  },525);
}
// function jump2() {
// }
