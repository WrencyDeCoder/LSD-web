// Hiệu ứng hiện dần khi cuộn
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe tất cả các phần tử cần animation
document.querySelectorAll('.timeline-item, .table-container, .achievement-card, .lesson-item, .team-member').forEach(el => {
    observer.observe(el);
});

// Ẩn scroll indicator khi cuộn xuống
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});