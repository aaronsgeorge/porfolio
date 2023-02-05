
// Smooth scrolling function
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Add click event listeners to navigation links
  var navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = event.target.getAttribute("href");
      smoothScroll(targetId, 1000);
    });
  });
  // Function to toggle the visibility of an element
function toggleVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Function to change the background color of the body when a button is clicked
function changeBackgroundColor() {
  var color = document.getElementById('color').value;
  document.body.style.backgroundColor = color;
}

// Function to animate an element when it is hovered over
function animateOnHover(elementId) {
  var element = document.getElementById(elementId);
  element.style.transition = 'all 0.5s';
  element.onmouseover = function() {
    element.style.transform = 'scale(1.2)';
  };
  element.onmouseout = function() {
    element.style.transform = 'scale(1)';
  };
}

// Attach the functions to the appropriate elements
document.getElementById('toggle-button').onclick = function() {
  toggleVisibility('toggle-element');
};

document.getElementById('color-button').onclick = function() {
  changeBackgroundColor();
};

animateOnHover('hover-element');
// Function to animate an element when it is hovered over
function animateOnHover(elementId) {
  var element = document.getElementById(elementId);
  element.style.transition = 'all 0.5s';
  element.onmouseover = function() {
    element.style.transform = 'scale(1.2)';
  };
  element.onmouseout = function() {
    element.style.transform = 'scale(1)';
  };
}

// Attach the animateOnHover function to the appropriate elements
animateOnHover('about-me');
animateOnHover('education');
animateOnHover('Interests');
animateOnHover('skills');
animateOnHover('contact');

