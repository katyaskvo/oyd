$('.svg-inject').svgInject();

jQuery(document).ready(function() {
	jQuery('.oyd-logo').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 0
    });	
    
    jQuery('.now-available').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 0
	});	

	jQuery('.animate-fadein').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 0
    });
    
    jQuery('.dead-giblet').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: -50
    });
       
});