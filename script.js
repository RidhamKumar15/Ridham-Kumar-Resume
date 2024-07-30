function toogleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

    // play the project videos
  document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.hover-video');

    videos.forEach(video => {
      video.addEventListener('mouseenter', function() {
        video.play();
        // document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      });

      video.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0; // Reset the video to the beginning
      });
    });
  });

  // scripts.js
// script.js

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Check if the link is to an external resource or file, if so, skip smooth scrolling
      if (this.getAttribute('href').startsWith('http') || this.getAttribute('href').startsWith('#')) {
        e.preventDefault(); // Prevent the default anchor click behavior for internal links

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
          // If it's an internal link (scroll to section)
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth', // Smooth scroll
              block: 'start' // Scroll to the start of the target element
            });
          }
        } else {
          // If it's an external link or file, allow the default behavior (open in new tab)
          window.open(targetId, '_blank');
        }
      }
    });
  });
});
