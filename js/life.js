$(document).ready(function(){
	$("#left").mouseenter(function(){
		$(".footer-links").fadeToggle("slow");
	});
	$("#footer-right").mouseenter(function(){
		$("#footer").fadeToggle("slow");
	});
	$("#1").mouseenter(function(){
		$("#fa1").animate({widht:"toggle"},"slow");
	})
	$("#2").mouseenter(function(){
		$("#fa2").animate({widht:"toggle"},"slow");
	})
	$("#3").mouseenter(function(){
		$("#fa3").animate({widht:"toggle"},"slow");
	})
	// FOOTER
});
$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 300) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});

$(document).mousemove(function(a){
	$("#bpjs").css({
		'left': -a.pageX / 20,
		'top': -a.pageY / 20 + 70
	});
});
// HEader

	var nilai = 0;
	var arah = '';

	$(window).scroll(function(){
		var aScroll = $(this).scrollTop()
		if (nilai < aScroll) {
			nilai = aScroll 
			arah = 'down'
		} else if (nilai = aScroll) {
			nilai = aScroll
			arah = 'up'
		}

		if (aScroll > $("#move").offset().top - 300) {
			$('#move h2').css({
				"left": aScroll / 10
			});

			if (arah == 'down') {
				if ($("#data").offset().left > 300) {
					$("#data").css({
						"right": 100
					});
				} else(
					$("#data").css({
						"right": aScroll / 100
					})
				);
			} else if (aScroll/30 < 300) {
				$("#data").css({
					"right": aScroll / 30
				})
			}

			// $("#jalan1").css({
			// 	'top': aScroll/2-100,
			// 	'left': 500
			// });
			// $("#jalan2").css({
			// 	'top': aScroll/3-100,
			// 	'left': 600
			// });
			// $("#jalan3").css({
			// 	'top': aScroll/4-100,
			// });
		};
	});