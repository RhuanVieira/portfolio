const textElement = document.querySelector(".typewriter");
const phrases = ["Software Engineer", "Front-End Developer", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 150;
const deleteSpeed = 75;
const delayBetweenPhrases = 2000;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;
    if (!isDeleting && charIndex === currentPhrase.length) {
        currentSpeed = delayBetweenPhrases;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, currentSpeed);
}
document.addEventListener("DOMContentLoaded", type);