function scrollToCta() {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
        // Optional: Add a slight shake/attention effect to the inputs
        setTimeout(() => {
            const inputs = document.querySelectorAll('.contact-form input');
            inputs.forEach(input => {
                input.style.transform = 'scale(1.02)';
                input.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    input.style.transform = 'scale(1)';
                    input.style.borderColor = 'rgba(255,255,255,0.1)';
                }, 300);
            });
        }, 800);
    }
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    form.style.display = 'none';
    const successMsg = document.getElementById('form-success');
    successMsg.classList.remove('hidden');
    successMsg.classList.add('active'); // triggers any css animation if present
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Parallax effect on floating badges
    document.addEventListener('mousemove', (e) => {
        const badges = document.querySelectorAll('.floating-badge');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        badges.forEach((badge, index) => {
            const speed = index === 0 ? 15 : -15;
            badge.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${index === 0 ? 5 : -5}deg)`;
        });
    });
});
