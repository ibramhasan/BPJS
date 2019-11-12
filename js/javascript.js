// JS hasan
$(document).ready(function(){
	$("#tombol").mouseenter(function(){
		$("#tombol").animate({heigth:"150px",width:"150px"},"slow");
			$("#tombol").mouseleave(function(){
				$("#tombol").animate({heigth:"120px",width:"120px"},"slow");
			});
	});
	
});

