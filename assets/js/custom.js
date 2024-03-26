$(function () {
    $('#datetimepicker1').datetimepicker();

    $('.toast').toast('show');

    $('#example').dataTable( {
      "dom": 'tpr',
      "order": [],
      "columnDefs": [ {
        "targets"  : 'no-sort',
        "orderable": false,
      }]
  });
});


// sliding tabs
$(document).ready(function($) {
    var tabwrapWidth= $('.tabs-group').outerWidth();
    var totalWidth=0;
    jQuery("ul li").each(function() { 
      totalWidth += jQuery(this).outerWidth(); 
    });
    if(totalWidth > tabwrapWidth){
      $('.scroller-btn').removeClass('inactive');
    }
    else{
      $('.scroller-btn').addClass('inactive');
    }

    if($("#scroller").scrollLeft() == 0 ){
      $('.scroller-btn.left').addClass('inactive');
    }
    else{
      $('.scroller-btn.left').removeClass('inactive');
    }
		var liWidth= $('#scroller li').outerWidth();
		var liCount= $('#scroller li').length;
		var scrollWidth = liWidth * liCount;

				$('.right').on('click', function(){
          $('.nav-tabs').animate({scrollLeft: '+=200px'}, 300);
          console.log($("#scroller").scrollLeft() + " px");
				});
				
				$('.left').on('click', function(){
					$('.nav-tabs').animate({scrollLeft: '-=200px'}, 300);
				});
      scrollerHide()
    
      function scrollerHide(){
        var scrollLeftPrev = 0;
        $('#scroller').scroll(function () {
            var $elem=$('#scroller');
            var newScrollLeft = $elem.scrollLeft(),
                width=$elem.outerWidth(),
                scrollWidth=$elem.get(0).scrollWidth;
            if (scrollWidth-newScrollLeft==width) {
                $('.right.scroller-btn').addClass('inactive');
            }
            else{

                $('.right.scroller-btn').removeClass('inactive');
            }
            if (newScrollLeft === 0) {
              $('.left.scroller-btn').addClass('inactive');
            }
            else{

                $('.left.scroller-btn').removeClass('inactive');
            }
            scrollLeftPrev = newScrollLeft;
        });
      }
	});


  
// multi range slider
let rangeMin = 0;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});

rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 0 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});



// report printing page
document.getElementById("btnPrint").onclick = function () {
  printElement(document.getElementById("printThis"));
}

function printElement(elem) {
  var domClone = elem.cloneNode(true);
  
  var $printSection = document.getElementById("printSection");
  
  if (!$printSection) {
      var $printSection = document.createElement("div");
      $printSection.id = "printSection";
      document.body.appendChild($printSection);
  }
  
  $printSection.innerHTML = "";
  $printSection.appendChild(domClone);
  window.print();
}