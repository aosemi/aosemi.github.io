$num = $('.ui-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;
$("#card").flip({
  trigger: 'manual'
});
$("#card_2").flip({
  trigger: 'manual'
});

$("#card_3").flip({
  trigger: 'manual'
});



if ($num % 2 == 0) {
  $('.ui-card:nth-child(' + $even + ')').addClass('active');
  $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.ui-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);

  if ($(this).hasClass('active')){
    console.log("i am active");
    $(this).flip('toggle');
    // $("#card_2").flip('toggle');
   
  }else {
    console.log("i am not active");
   
  }
  
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
 
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


$('html body').keydown(function(e) {
  if (e.keyCode == 37) {
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) {
    $('.active').next().trigger('click');
  }
});


$(document).scroll(function () {
  //Show element after user scrolls 800px
  var y = $(this).scrollTop();
  if (y > 100) {
      $('.bottomMenu').fadeIn();
  } else {
      $('.bottomMenu').fadeOut();
  }

});



$(document).ready(function(){
  
//$('#audio_control').trigger( "click" );
});

var audioId   = document.getElementById('audio_player');


$('#audio_control').click(function(e) {           
  e.preventDefault(); 
  var audioRf = $('#audio_player');
  $(this).toggleClass('active');
  if (audioRf.prop('paused') == false) {            
    audioRf.get(0).pause();
    $(this).addClass('pause').removeClass('play');
  } 
  else 
  {
    audioRf.get(0).play();
    $(this).addClass('play').removeClass('pause');
    $('.audioprogress').removeClass('ease-none');
  }
});

function audioProgressBar() {
  
  var duration  = audioId.duration,
      preTime   = audioId.currentTime,
      audioTimer, percent,
      bar_offset = -502, 
      percent = (preTime / duration) * 100,
      dashoffset = percent * (bar_offset / 100),
      finalofst = bar_offset + dashoffset;

  $('#bar').css({
    'stroke-dashoffset' : finalofst + 'px'
  });
  
  if(duration == preTime) {
    $('#audio_control').removeClass('active');
    $('#bar').removeAttr('style');
    $('.audioprogress').addClass('ease-none');
  }
  
  $('#dashoffset').html('Duration: ' + duration + '<br>Current Time: ' + preTime);
  
}







