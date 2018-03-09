// //transparent bg
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $('#custom-nav').addClass('affix');
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $('#custom-nav').removeClass('affix');
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }   
// });

//change color transparent to black

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 300){
    	$(".navbar").css("background","rgba(1,1,1,1");
    }
    else{
    	$(".navbar").css("background","rgba(0,0,0,0");
    }
  });
});

// dropdown hover

$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');

       
    if (url !== '#') {
    
      window.location.href = url;
    }

  }
});

