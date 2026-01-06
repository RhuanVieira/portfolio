function toggleModal() {
    const modal = document.getElementById('contact-modal');
    
    
    modal.classList.toggle('active');

  
    if (modal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}


document.getElementById('contact-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleModal();
    }
});

document.querySelector('.modal-form').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const btn = document.querySelector('.btn-send');
    const originalText = btn.innerText;
    btn.innerText = "Enviando...";

  
    const serviceID = 'service_vv44syv';
    const templateID = 'template_i74h7a3';

    const templateParams = {
        from_name: document.querySelector('input[placeholder="Digite seu nome completo"]').value,
        reply_to: document.querySelector('input[placeholder="exemplo@gmail.com"]').value,
        message: document.querySelector('textarea').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            btn.innerText = "Enviado com Sucesso!";
            btn.style.background = "#28a745"; // Verde de sucesso
            
            // Limpa o formulário e fecha o modal após 2 segundos
            setTimeout(() => {
                event.target.reset();
                btn.innerText = originalText;
                btn.style.background = "var(--accent-primary)";
                toggleModal(); 
            }, 2000);
        }, (err) => {
            btn.innerText = "Erro ao enviar";
            btn.style.background = "#dc3545"; // Vermelho de erro
            console.log(JSON.stringify(err));
        });
});