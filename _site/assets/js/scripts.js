// --- smooth scroll on clicking nav items
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 200);
    return false;
});

// --- if url has hash, open that specific element
function openTarget() {
  var hash = location.hash.substring(1);
  console.log(hash);
  if(hash) var details = document.getElementById(hash);
  if(details && details.tagName.toLowerCase() === 'details') details.open = true;
}
window.addEventListener('load', openTarget);
openTarget();

// --- click events
$( "img" ).click(function() {
  $( this ).parent().toggleClass('active');
});

$( ".perma-btn" ).click(function() {
  $( this ).next().toggleClass('active');
  $( this ).toggleClass('active');
});

$('.key-btn').click(function(){
  $( '.key' ).toggleClass('active');
});

    
// --- random alignments
var classes = new Array ('left', 'left-half', 'center', 'right-half', 'right');

var length = classes.length;

var segments = $('.align');

// loop through all a-tags and apply alignment randomly
$.each( segments, function(key, value) {
  // get random value/class-name from array and add it using the addClass function
  console.log ("IN");
  $(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
});


// --- checking the time
function checkTime() {
  var d = new Date();
  var currentHour = d.getHours(); //note 0-23

  console.log(currentHour);
  
  if (currentHour >= 18 || currentHour <= 4) { 
    $('.mound-path').addClass('night');
  }
  else {
    $('.mound-path').addClass('day');
    $('.star').hide();
    $('.satellite').hide();
  }
}

checkTime();
setInterval(checkTime(), (1000 * 60) * 5);


// --- lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});