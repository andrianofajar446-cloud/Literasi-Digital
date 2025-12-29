function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
}

// Efek hover pada gambar infografis
document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('infografis');
    if (img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    }
    
    // Animasi fade-in otomatis pada load
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 200);
    });
});