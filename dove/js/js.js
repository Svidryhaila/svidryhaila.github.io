 document.addEventListener("DOMContentLoaded", function(event) {

 	var nav = document.querySelector('.nav');

 	/*=========ONSCROLL ANIMATIONS============*/

 	window.onscroll = function() {
 		( document.documentElement.scrollTop > 80 ) ? nav.classList.add('active') : nav.classList.remove('active');

 		var tabbedOffset = document.querySelector('.tabbed').offsetTop;

 		if ( document.documentElement.scrollTop > tabbedOffset - 400 ) {
 			document.querySelector('.tabbed-img').classList.add('shown');
 			document.querySelector('.tabbed-info').classList.add('shown');
 		}

 		var accordionOffset = document.querySelector('.accordion').offsetTop;

 		if ( document.documentElement.scrollTop > accordionOffset - 400 ) {
 			document.querySelector('.accordion-img').classList.add('shown');
 			document.querySelector('.accordion-info').classList.add('shown');
 		}

 		var odometer = document.querySelectorAll('.odometer');
 		var statOffset = document.querySelector('.stats ').offsetTop;

 		if ( document.documentElement.scrollTop > statOffset - 600 ) {
 			for (var i = 0; i < odometer.length; i++) {
 				odometer[i].style.display = 'inline-block';
 			}
 		}
 	}

 	/*=========ONSCROLL ANIMATIONS/============*/

 	/*=========MODAL VIDEO============*/

 	var videoBtn = document.querySelector('.video-btn');
 	var videoModal = document.querySelector('.video-modal');
 	var videoModalClose = videoModal.querySelector('.close');
 	var videoModalFrame = videoModal.querySelector('iframe');

 	videoBtn.addEventListener('click', function() {
 		videoModal.style.display = 'flex';
 		videoModalFrame.src = 'https://www.youtube.com/embed/GfblQtZi4Ms';
 	});

 	videoModalClose.addEventListener('click', function() {
 		videoModal.style.display = 'none';
 		videoModalFrame.src = videoModalFrame.src; //stop iframe video after modal window is closed
 	});

 	/*=========MODAL VIDEO/============*/

 	/*=========NAVIGATION============*/

 	var navLinks = document.querySelector('.nav-links');
 	var navLinksBtns = navLinks.querySelectorAll('.nav-links-dropdown');
 	var navSmallBtn = document.querySelector('.nav-small-dropdown');
 	var navSmallMenu = document.querySelector('.nav-small-content');

 	navSmallMenu.addEventListener('click', function(ev) {
 		if ( ev.target.tagName.toLowerCase() == 'button' ) {
 			ev.target.classList.toggle("active");

 			var content = ev.target.nextElementSibling;
 			if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    } 
 		}
 	});

 	document.body.addEventListener('click', function(ev){

 		if ( ev.target.classList.contains('nav-links-dropdown') ) { 
 			for (var i = 0; i < navLinksBtns.length; i++) {
 				navLinksBtns[i].parentElement.classList.remove('active');
 			}	
 			ev.target.parentElement.classList.add('active');
 		} else {
 			for (var i = 0; i < navLinksBtns.length; i++) {
 				navLinksBtns[i].parentElement.classList.remove('active');
 			}
 		}

 		if ( ev.target.classList.contains('nav-small-dropdown') ) {
 			navSmallMenu.classList.toggle('active');
 		} else if ( navSmallMenu.contains(ev.target) ) {
 			return false;
 		} else {
 			navSmallMenu.classList.remove('active');
 		}

 	});

 	/*=========NAVIGATION/============*/

 	/*=========TABS============*/

 	var tabbedInfoContent = document.querySelector('.tabbed-info-content');
 	var tabbedInfoContentBlocks = tabbedInfoContent.getElementsByTagName('DIV');
 	var tabbedInfoTabs = document.querySelector('.tabbed-info-tabs');
 	var tabbedInfoTabsBtns = tabbedInfoTabs.querySelectorAll('.tabbed-info-tabs button');
 	var tabbedCarousel = document.querySelector('.tabbed-carousel');
 	var tabbedCarouselImgs = tabbedCarousel.querySelectorAll('.carousel-img');

 	tabbedInfoTabs.addEventListener('click', function(ev){

 		//set 'pointer-events: none' to inner element or it'll become ev.target when clicked
 		if ( ev.target !== ev.currentTarget ) {

 			//change triggered button color
 			for (var i = 0; i < tabbedInfoTabsBtns.length; i++) {
 				tabbedInfoTabsBtns[i].classList.remove('active');
 			}

 			//show target tab and hide the others
 			for (var i = 0; i < tabbedInfoContentBlocks.length; i++) {

 				if ( ev.target.dataset.id == tabbedInfoContentBlocks[i].dataset.id ) {
 					ev.target.classList.add('active');
 					tabbedInfoContentBlocks[i].style.display = 'block';
 				} else {
 					tabbedInfoContentBlocks[i].style.display = 'none';
 				}

 			}

 			//show target image and hide the others
 			for (var i = 0; i < tabbedCarouselImgs.length; i++) {

 				if ( ev.target.dataset.id == tabbedCarouselImgs[i].dataset.id ) {
 					tabbedCarouselImgs[i].classList.add('active');
 				} else {
 					tabbedCarouselImgs[i].classList.remove('active');
 				}
 				
 			}

 		} 

 		ev.stopPropagation();

 	});

 	/*=========TABS/============*/

 	/*=========ACCORDION============*/

 	var accordionInfoTabs = document.querySelector('.accordion-info-tabs');
 	var accordionInfoTabContent = accordionInfoTabs.querySelectorAll('.accordion-info-tab');
 	var accordionInfoTabsBtns = accordionInfoTabs.querySelectorAll('.accordion-info-tabs button');
 	var accordionCarousel = document.querySelector('.accordion-carousel');
 	var accordionCarouselImgs = accordionCarousel.querySelectorAll('.carousel-img');

 	accordionInfoTabs.addEventListener('click', function(ev){

 		//set 'pointer-events: none' to inner element or it'll become ev.target when clicked
 		if ( ev.target !== ev.currentTarget && ev.target.tagName.toLowerCase() == 'button' ) {

 			for (var i = 0; i < accordionInfoTabsBtns.length; i++) {
 				accordionInfoTabsBtns[i].querySelector('i.right').classList.remove('active');
 			}

 			//show target tab and hide the others
 			for (var i = 0; i < accordionInfoTabContent.length; i++) {


 				if ( ev.target.dataset.id == accordionInfoTabContent[i].dataset.id ) {
 					accordionInfoTabContent[i].classList.add('active');
 					ev.target.querySelector('i.right').classList.add('active');
 				} else {
 					accordionInfoTabContent[i].classList.remove('active');
 				}

 			}

 			//show target image and hide the others
 			for (var i = 0; i < accordionCarouselImgs.length; i++) {

 				if ( ev.target.dataset.id == accordionCarouselImgs[i].dataset.id ) {
 					accordionCarouselImgs[i].classList.add('active');
 				} else {
 					accordionCarouselImgs[i].classList.remove('active');
 				}
 				
 			}

 		} 

 		ev.stopPropagation();

 	});

 	/*=========ACCORDION/============*/

 	/*=========PRICING============*/

 	var pricing = document.querySelector('.pricing');
 	var pricingCards = pricing.querySelectorAll('.pricing-cards-card');
 	var pricingCardNext = pricing.querySelector('.pricing-next');
 	var pricingCardPrev= pricing.querySelector('.pricing-prev');
 	pricingCards[0].style.opacity = '1';

 	var news = document.querySelector('.news');
 	var newsBoxes = news.querySelectorAll('.news-box');
 	var newsNext = news.querySelector('.news-next');
 	var newsPrev = news.querySelector('.news-prev');
 	newsBoxes[0].style.opacity = '1';

 	slider(newsBoxes, newsNext, newsPrev, news);

 	slider(pricingCards, pricingCardNext, pricingCardPrev, pricing);

 	//gZone - area is being listened for touch event
 	function slider(items, nextBtn, prevBtn, gZone) {

 		var currentItem = 0;

 		nextBtn.addEventListener('click', function(){

	 		currentItem++;

	 		if ( currentItem > items.length - 1 ) currentItem = 0;

	 		slideChange();
	 			
	 	});

	 	prevBtn.addEventListener('click', function(){
 		
	 		currentItem--;

	 		if ( currentItem < 0 ) currentItem = items.length - 1;

	 		slideChange();		
	 	});

		var touchstartX = 0;
		var touchendX = 0;

		gZone.addEventListener('touchstart', function(event) {
		    touchstartX = event.changedTouches[0].screenX;
		}, false);

		gZone.addEventListener('touchend', function(event) {
		    touchendX = event.changedTouches[0].screenX;
		    handleGesture();
		}, false); 

		function handleGesture() {
		    if ( touchstartX - touchendX > 70 ) {
		        currentItem++;

		 		if ( currentItem > items.length - 1 ) currentItem = 0;

		 		slideChange();
		    }
		    
		    if ( touchendX - touchstartX > 70 ) {
		        currentItem--;
		 		if ( currentItem < 0 ) currentItem = items.length - 1;

		 		slideChange();
		    }

		}

	 	function slideChange() {
	 		for (var i = 0; i < items.length; i++) {
	 			items[i].style.opacity = '0';
	 			items[i].classList.remove('active');
	 		}

	 		items[currentItem].style.opacity = '1';
	 		items[currentItem].classList.add('active');
	 	}

 	}

 	/*=========PRICING/============*/

 	/*=========ONRESIZE AND MAP============*/

 	window.onresize = function () {
 		if ( window.innerWidth > 980 ) {
 			for (var i = 0; i < pricingCards.length; i++) {
 				pricingCards[i].style.opacity = '1';
 			}

 			for (var i = 0; i < newsBoxes.length; i++) {
 				newsBoxes[i].style.opacity = '1';
 			}
 		}
 	}


 	function myMap() {
	    var mapOptions = {
	        center: new google.maps.LatLng(2.0522069, 45.3246049),
	        zoom: 16,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
          position: new google.maps.LatLng(2.0522069, 45.3246049),
          map: map
        });
	}

	myMap();

	/*=========ONRESIZE AND MAP/============*/

 });