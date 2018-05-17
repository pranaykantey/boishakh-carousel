$.fn.boishakhCarousel = function(){
	// html usage please... add elament like this .boishakh-carousel
	// > .bc-container > .bc-content > .bc-item
    let container = this.find('.bc-container');
    let content = this.find('.bc-content');
    let item = this.find('.bc-item');
    let containerWidth = $(window).width();
    let contentWidth = $(window).width()*( item.length)+100;
    let itemOnScreen = 2;
    let itemWidth = containerWidth/itemOnScreen;
    var sliderCount = 0;
    let transformVal;

    container.after('<span class="prev">Prev</span><span class="next">Next</span>');

    $('.next').click(function(){
    	runSlide('next');
    	console.log( sliderCount );
    });
    $('.prev').click(function(){
    	runSlide('prev');
    	console.log( sliderCount );
    });

    function runSlide( param ){

    	if( param == 'next' ){
    		// after clicking next button
    		if( sliderCount >= item.length-itemOnScreen ){
				sliderCount = 0;
				transformVal = itemWidth*sliderCount;
	    		content.css('transform','translateX(-'+transformVal+'px)');
    		}else if( sliderCount >= 0 && sliderCount <= item.length-itemOnScreen ){
	    		sliderCount += 1;
	    		transformVal = itemWidth*sliderCount;
	    		content.css('transform','translateX(-'+transformVal+'px)');
    		}

    	}else if( param == 'prev' ){
    		// after clicking previous button
    		if( sliderCount <= 0 ){
				sliderCount = item.length-itemOnScreen;
				transformVal = itemWidth*sliderCount;
	    		content.css('transform','translateX(-'+transformVal+'px)');
    		}else if( sliderCount >= 0 && sliderCount <= item.length ){
	    		sliderCount -= 1;
	    		transformVal = itemWidth*sliderCount;
	    		content.css('transform','translateX(-'+transformVal+'px)');
    		}
    	}

    // 	if( sliderCount >= 0 && sliderCount <= item.length ){

	   //  	if( param == 'next' ){

	   //  		sliderCount += 1;
	   //  		transformVal = itemWidth*sliderCount;
	   //  		content.css('transform','translateX(-'+transformVal+'px)');
	   //  	}else if( param == 'prev' ){

	   //  		sliderCount -= 1;
				// transformVal = itemWidth*sliderCount;
	   //  		content.css('transform','translateX(-'+transformVal+'px)');
	   //  	}

    // 	}

		// if( sliderCount <= 0 ){
  //   		if( param == 'next' ){

  //   			sliderCount = 1;
	 //    		content.css('transform','translateX(-'+transformVal+'px)');

  //   		}else if( param == 'prev' ){

  //   			sliderCount = item.length;
	 //    		sliderCount -= itemOnScreen;
	 //    		content.css('transform','translateX(-'+transformVal+'px)');
  //   		}
    		
  //   	}else if( sliderCount >= item.length ){
  //   		if( param == 'next' ){
  //   			sliderCount = 0;
	 //    		content.css('transform','translateX(-'+transformVal+'px)');
  //   		}else if( param == 'prev' ){
  //   			sliderCount = item.length;
	 //    		content.css('transform','translateX(-'+transformVal+'px)');
  //   		}
  //   	}

    }

    container.width( containerWidth );
    content.width( contentWidth );
    item.width( itemWidth );
}