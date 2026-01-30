function toggleVideo(videoUrl = "", title = "", desc = "") {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('player-iframe');
    const titleElem = document.getElementById('video-title');
    const descElem = document.getElementById('video-description');

    modal.classList.toggle('active');

    if (modal.classList.contains('active')) {
        
        iframe.src = videoUrl;
        titleElem.innerText = title;
        descElem.innerText = desc;
        document.body.style.overflow = 'hidden';
    } else {
        
        iframe.src = "";
        document.body.style.overflow = 'auto';
    }
}


document.getElementById('video-modal').addEventListener('click', function(e) {
    if (e.target === this) toggleVideo();
});