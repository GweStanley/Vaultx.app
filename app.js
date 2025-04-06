  // Initialize carousel with 5 second interval
  document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Handle video playback in carousel
    const carousel = document.getElementById('assetCarousel');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function() {
            const activeItem = this.querySelector('.carousel-item.active');
            const videos = activeItem.querySelectorAll('video');
            videos.forEach(video => {
                video.currentTime = 0;
                video.play().catch(e => console.log('Video play prevented:', e));
            });
        });
        
        // Initialize autoplay for first video
        const firstVideo = carousel.querySelector('.carousel-item.active video');
        if (firstVideo) {
            firstVideo.play().catch(e => console.log('First video play prevented:', e));
        }
    }
});