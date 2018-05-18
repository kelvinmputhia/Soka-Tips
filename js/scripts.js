
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");

    // Declare a loop variable
    var i;

    // Full-width images
    function one() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "100%";  // IE10
            elements[i].style.flex = "100%";
        }
    }

    // Two images side by side
    function two() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "50%";  // IE10
            elements[i].style.flex = "50%";
        }
    }

    // Four images side by side
    function four() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "25%";  // IE10
            elements[i].style.flex = "25%";
        }
    }







    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};
//overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
