$(document).ready(function(){

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	var current = 1;
	var steps = $("form").length;
	// var steps1 = $(".formStep1").length;

	// alert(steps1);

	setProgressBar(current);

	//------------------- BEGIN: Switch to Next Step ------------------//
	$('.next_li').click(function(){
		var current_fs_group = $(this).parent().parent().parent();
		var next_fs_group = $(this).parent().parent().parent().next();		
		var next_fs_next = $(this).parent().parent().parent().next().find('.show_next');

		//Add Class Active
		$(".progressbar li span").eq($(".first").index(next_fs_group)).addClass("active");
		$(".progressbar li span").eq($(".first").index(current_fs_group)).addClass("li_prev");

		next_fs_group.show();
		next_fs_next.show();
		current_fs_group.hide();

		//hide the current fieldset with style
		next_fs_next.animate({opacity: 1}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs_group.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs_next.css({'opacity': opacity});
			},
			duration: 500
		});
	});
	//------------------- END: Switch to Next Step ---------------------//


	//------------------- BEGIN: Switch to next FieldSet ---------------------//
	$(".next").click(function(){

		current_fs = $(this).parent().parent();
		next_fs = $(this).parent().parent().next();

		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs.css({'opacity': opacity});
			},
			duration: 500
		});
		setProgressBar(++current);
	});
	//------------------- END: Switch to next FieldSet -------------------------//


	//------------------ BEGIN: Switch to Previous Step -----------------------//
	$('.previous_li').click(function(){

		var previous_fs_active = $(this).parent().parent().parent();
		var previous_fs_prev_1 = $(this).parent().parent().parent().prev();
		var previous_fs_prev = $(this).parent().parent().parent().prev().find('.show_prev');

		//Add Class Active
		$(".progressbar li span").eq($(".first").index(previous_fs_active)).removeClass("active");		
		$(".progressbar li span").eq($(".first").index(previous_fs_prev_1)).removeClass("li_prev");

		//show the previous fieldset
		previous_fs_prev.show();
		previous_fs_prev_1.show();
		previous_fs_active.hide();

		//hide the current fieldset with style
		previous_fs_prev.animate({opacity: 1}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				previous_fs_active.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs_prev.css({'opacity': opacity});
			},
			duration: 500
		});
	});
	//----------------------- END: Switch to previous step -----------------------//


	//---------------------- BEGIN: Switch to previous fieldset -------------------//
	$(".previous").click(function(){

		current_fs = $(this).parent().parent();
		previous_fs = $(this).parent().parent().prev();

		//show the previous fieldset
		previous_fs.show();

		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs.css({'opacity': opacity});
			},
			duration: 500
		});
		setProgressBar(--current);
	});
	//------------------------- END: Switch to previous fieldset -------------------------//


	function setProgressBar(curStep){
		var percent = parseFloat(100 / steps) * curStep;
		percent = percent.toFixed();
		$(".progress-bar").css("width",percent+"%")
	};

	$(".submit").click(function(){
		return false;
	});

});

// BEGIN: circular radial Progressbar
(function ($) {
	$.fn.roundProgressbar = function (options) {
		options = $.extend(
			{
				animate: true,
				animateText: true
			},
			options
		);

		var $this = $(this);

		var $progressBar = $this;
		var $progressCount = $progressBar.find(".ProgressBar-percentage--count");
		var $circle = $progressBar.find(".ProgressBar-circle");
		var percentageProgress = $progressBar.attr("data-progress");
		var percentageRemaining = 100 - percentageProgress;
		var percentageText = $progressCount.parent().attr("data-progress");

		//Calcule la circonférence du cercle
		var radius = $circle.attr("r");
		var diameter = radius * 2;
		var circumference = Math.round(Math.PI * diameter);

		//Calcule le pourcentage d'avancement
		var percentage = (circumference * percentageRemaining) / 100;

		$circle.css({
			"stroke-dasharray": circumference,
			"stroke-dashoffset": percentage
		});

		//Animation de la barre de progression
		if (options.animate === true) {
			$circle
				.css({
					"stroke-dashoffset": circumference
				})
				.animate(
					{
						"stroke-dashoffset": percentage
					},
					3000
				);
		}

		//Animation du texte (pourcentage)
		if (options.animateText == true) {
			$({ Counter: 0 }).animate(
				{ Counter: percentageText },
				{
					duration: 3000,
					step: function () {
						$progressCount.text(Math.ceil(this.Counter) + "%");
					}
				}
			);
		} else {
			$progressCount.text(percentageText + "%");
		}
	};
})(jQuery);

$(document).ready(function () {
	$(".ProgressBar--animateAll").roundProgressbar();
	$(".ProgressBar--animateAll_1").roundProgressbar();
	$(".ProgressBar--animateAll_2").roundProgressbar();
	$(".ProgressBar--animateAll_3").roundProgressbar();
	$(".ProgressBar--animateAll_4").roundProgressbar();
	$(".ProgressBar--animateAll_5").roundProgressbar();
	$(".ProgressBar--animateAll_6").roundProgressbar();
	$(".ProgressBar--animateAll_7").roundProgressbar();
	$(".ProgressBar--animateAll_8").roundProgressbar();
	$(".ProgressBar--animateAll_9").roundProgressbar();
});
// END: circular radial Progressbar

$(document).ready(function(){

    $('.btn-remove, .childNumber').hide();
    // BEGIN: clone the div
    $(".btn-copy").on('click', function(){
        var count = $('.childDetail').length;
        count++;
        var ele = $(this).closest('.childDetail').clone(true);
        //var i = $(this).closest('.childDetail').find('.sequence').attr('data-id');

        ele.find('input').val(''); // Clear all inputs in the clone object
        ele.find('.sequence').html(count);
        $(this).closest('.childDetail').after(ele);
        $(this).hide();
        ele.find('.btn-remove').show();
        $('.childNumber').show();
    });
    // END: clone the div

    // BEGIN: remove the div
    $(".btn-remove").on('click', function(){
        $(this).closest('.childDetail').remove();
        $('.childDetail:last').find('.btn-copy').show();
    });
    // END: remove the div

    // BEGIN: Steps to move to next step/ go back to previous step
    $('.next_step').on('click', function() {
        $('.steps_li_1').css('display', 'none');
        $('.steps_li_2').css('display', 'flex');
        // $('.progress-bar').attr('aria-valuenow', '33.33');
    });
    $('.prev_step').on('click', function() {
        $('.steps_li_1').css('display', 'flex');
        $('.steps_li_2').css('display', 'none');
    });

    $('.next_step1').on('click', function() {
        $('.steps_li_2').css('display', 'none');
        $('.steps_li_3').css('display', 'flex');
        // $('.progress-bar').attr('aria-valuenow', '66.66').css('width', '66.66%');
    });
    $('.prev_step1').on('click', function() {
        $('.steps_li_2').css('display', 'flex');
        $('.steps_li_3').css('display', 'none');
    });
    // END: Steps to move to next step/ go back to previous step

    // BEGIN: if checkbox is checked then show the div
    $('.totalLoan').hide();
    $('.radio_loan').click(function() {
        if( $('.radio_loan').is(':checked')) {
            $(".totalLoan").show();
        } else {
            $(".totalLoan").hide();
        }
    });
    // END: if checkbox is checked then show the div 

    // BEGIN: Go to final step

    $('.final_step').on('click', function(){
        $('.progressbar').hide();
    });

});