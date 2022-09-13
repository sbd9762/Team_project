/* SHIN BADA 220825 */
/* Javascript reponsible for sidebar function  */

$(function () {
	/* Constant */

	// Time of Animation duration.
	const DURATION = 300;

	const HIDE_BAR = 'hide-bar';
	const HIDE_BTN = 'hide-btn';

	// number to divide a height of full document.
	const DIVIDE = 10;

	/* Variable */

	// Height of full document.
	let allHeight = $(document).height();

	// limit of bar based on height of full document.
	let limitBar = { up: allHeight / DIVIDE, down: allHeight };

	// limit of operation of bar.
	let limitDiff = allHeight - limitBar.up;

	// limit of button based on limit of operation of bar.
	let limitBtn = { up: limitDiff / DIVIDE + limitBar.up, down: allHeight * ((DIVIDE - 1) / DIVIDE) };

	// Value of the top and bottom of viewport.
	let nowHeightTop = window.pageYOffset;
	let nowHeightBottom = nowHeightTop + $(window).height();

	/* jQuery Object */

	let $sideBar = $('.sidebar');
	let $topBtn = $('.top-btn');
	let $bottomBtn = $('.bottom-btn');

	/* Flag and Timer */

	let hideTimer;
	let isHiding;

	/* Function */
	// Hide element.
	const hideElement = (e, CLASS) => {
		// Debounce.
		if (hideTimer) { clearTimeout(hideTimer); }

		e.addClass(CLASS);

		hideTimer = setTimeout(() => {
			if (e.hasClass(CLASS)) {
				e.css('visibility', 'hidden');
			}
		}, DURATION);
	}
	
	// Show element.
	const showElement = (e, CLASS) => {
		e.removeClass(CLASS).css('visibility', '');
	}

	// Hide and show element according to the scroll position.
	const calcScrollButtonHide = () => {
		if (!$topBtn.hasClass(HIDE_BTN) && nowHeightTop < limitBtn.up) {
			hideElement($topBtn, HIDE_BTN);
			
			// Move to the top as much as element's height and margin.
			$bottomBtn.css('transform', 'translateY(calc(-100% - 10px))');
		} else if ($topBtn.hasClass(HIDE_BTN) && nowHeightTop > limitBtn.up) {
			showElement($topBtn, HIDE_BTN);
			$bottomBtn.css('transform', '');
		}
		
		if (!$bottomBtn.hasClass(HIDE_BTN) && nowHeightBottom > limitBtn.down) {
			hideElement($bottomBtn, HIDE_BTN)
		} else if ($bottomBtn.hasClass(HIDE_BTN) && nowHeightBottom < limitBtn.down) {
			showElement($bottomBtn, HIDE_BTN);
		}
	}

	// Calculate sticky DOM's state based on the scroll position.
	const calcSideBarHide = () => {
		calcScrollButtonHide();
		if (!$sideBar.hasClass(HIDE_BAR) && nowHeightTop < limitBar.up) {
			hideElement($sideBar, HIDE_BAR);

			isHiding = setTimeout(function () { isHiding = null }, DURATION);
		} else if ($sideBar.hasClass(HIDE_BAR) && nowHeightTop > limitBar.up) {
			showElement($sideBar, HIDE_BAR);
			
			// Reduce overloading by animation called by eventlistener, And optimize it.
			calcScrollButtonHide();
		} else {
			if (!isHiding) {
				calcScrollButtonHide();
			}
		}
	}

	// Reinitialize Variable.
	const initVaribale = () => {
		allHeight = $(document).height();
		limitBar = { up: allHeight / DIVIDE, down: allHeight };
		limitDiff = allHeight - limitBar.up;
		limitBtn = { up: limitDiff / DIVIDE + limitBar.up, down: allHeight * ((DIVIDE - 1) / DIVIDE) };
		nowHeightTop = window.pageYOffset;
		nowHeightBottom = nowHeightTop + $(window).height();
	}

	// Initialize sideBar.
	calcSideBarHide();

	/* EventListner */

	// When scroll, Reinitialize information of viewport and animate Moving button according to it.
	$(window).on('scroll', function() {
		calcSideBarHide();

		nowHeightTop = window.pageYOffset;
		nowHeightBottom = nowHeightTop + $(window).height();

		calcSideBarHide();
	})

	// When click moving button, Scroll.
	$(".top-btn").on('click', function() {
		$('html').stop().animate({scrollTop:0}, DURATION);
	})

	$(".bottom-btn").on('click', function() {
		$('html').stop().animate({scrollTop:allHeight}, DURATION);
	})

	// When window resize, Reinitialize variable.
	$(window).on('resize', function() {
		initVaribale();
	})
})