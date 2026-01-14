function toggleVideo(videoUrl = "", title = "", desc = "") {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('player-iframe');
    const titleElem = document.getElementById('video-title');
    const descElem = document.getElementById('video-description');

    modal.classList.toggle('active');

    if (modal.classList.contains('active')) {
        // Ao abrir, define o link e os textos
        iframe.src = videoUrl;
        titleElem.innerText = title;
        descElem.innerText = desc;
        document.body.style.overflow = 'hidden';
    } else {
        // Ao fechar, limpa o src para parar o áudio/vídeo
        iframe.src = "";
        document.body.style.overflow = 'auto';
    }
}

// Fechar ao clicar fora
document.getElementById('video-modal').addEventListener('click', function(e) {
    if (e.target === this) toggleVideo();
});