function toggleVideo(videoUrl = "", title = "", desc = "") {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('player-iframe');
    const titleElem = document.getElementById('video-title');
    const descElem = document.getElementById('video-description');

    const isOpen = modal.classList.contains('active');

    if (!isOpen) {
        modal.classList.add('active');

        iframe.src = videoUrl + "?autoplay=1";
        titleElem.innerText = title;
        descElem.innerText = desc;

        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.remove('active');

        iframe.src = "";
        document.body.style.overflow = 'auto';
    }
}
