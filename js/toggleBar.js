function toggleModal() {
    const modal = document.getElementById('contact-modal');
    const display = modal.style.display;
    
    if (display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// Fechar se clicar fora da janela branca
window.onclick = function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}