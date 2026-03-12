// Animation des compteurs pour les key-numbers
function animateKeyNumbers() {
    const keyNumbers = document.querySelectorAll('.key-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target;
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 20);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    keyNumbers.forEach(num => observer.observe(num));
}

// Animation des blocs de clubs au scroll
function animateClubBlocks() {
    const clubBlocks = document.querySelectorAll('.club-trophy-block');
    
    const blockObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    clubBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(50px)';
        block.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        blockObserver.observe(block);
    });
}

// Animation des cartes individuelles
function animateIndividualCards() {
    const cards = document.querySelectorAll('.individual-trophy-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.3 });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    animateKeyNumbers();
    animateClubBlocks();
    animateIndividualCards();
});