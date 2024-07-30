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

