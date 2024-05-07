document.addEventListener("DOMContentLoaded", function() {
    const hoverElement = document.getElementById("child1");
    const videoElement = document.getElementById("oxVideo");
  
    hoverElement.addEventListener("mouseover", function() {
      videoElement.style.display = "block";
      videoElement.play(); // Auto-play the video
    });
  
    hoverElement.addEventListener("mouseout", function() {
      videoElement.style.display = "none";
      videoElement.pause(); // Pause the video
    });
  });

//   ------------
  
document.addEventListener("DOMContentLoaded", function() {
    const hoverElement = document.getElementById("child2");
    const videoElement = document.getElementById("cm1");
  
    hoverElement.addEventListener("mouseover", function() {
      videoElement.style.display = "block";
      videoElement.play(); // Auto-play the video
    });
  
    hoverElement.addEventListener("mouseout", function() {
      videoElement.style.display = "none";
      videoElement.pause(); // Pause the video
    });
  });
  

//   ------------
  
document.addEventListener("DOMContentLoaded", function() {
    const hoverElement = document.getElementById("child3");
    const videoElement = document.getElementById("cm2");
  
    hoverElement.addEventListener("mouseover", function() {
      videoElement.style.display = "block";
      videoElement.play(); // Auto-play the video
    });
  
    hoverElement.addEventListener("mouseout", function() {
      videoElement.style.display = "none";
      videoElement.pause(); // Pause the video
    });
  });
  

//   ------------
  
document.addEventListener("DOMContentLoaded", function() {
    const hoverElement = document.getElementById("child4");
    const videoElement = document.getElementById("cm3");
  
    hoverElement.addEventListener("mouseover", function() {
      videoElement.style.display = "block";
      videoElement.play(); // Auto-play the video
    });
  
    hoverElement.addEventListener("mouseout", function() {
      videoElement.style.display = "none";
      videoElement.pause(); // Pause the video
    });
  });

//   ---------

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("defaultBg");
  
    // Remove the video after 5 seconds
    setTimeout(function() {
      videoElement.parentNode.removeChild(videoElement);
    }, 5000);
  });

//   ---------

document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("mainSec");
    setTimeout(function() {
      section.classList.remove("hidden3");
    }, 5000);
  });
  
  
  
  