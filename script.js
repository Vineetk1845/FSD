/**
 * STUDENT PORTFOLIO JAVASCRIPT (script.js)
 * Author: Vineet (TY B.Tech AI & ML - MITAOE)
 * Features:
 *  1. Responsive Mobile Navigation Menu Toggle
 *  2. Active Navigation Link Highlighting on Scroll
 *  3. Contact Form Submission Feedback (No backend required)
 *  4. Placeholder Project Button Click Handling
 */

document.addEventListener('DOMContentLoaded', () => {

    // ================= 1. MOBILE MENU TOGGLE =================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        // Toggle menu open/close on mobile hamburger click
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
        });

        // Close mobile menu whenever any navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
            });
        });
    }


    // ================= 2. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL =================
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Offset for fixed header
            const sectionId = section.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (targetLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);


    // ================= 3. CONTACT FORM VALIDATION & SUCCESS MESSAGE =================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page refresh

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Simple field validation
            if (!name || !email || !message) {
                formFeedback.className = 'form-feedback error';
                formFeedback.textContent = 'Please fill in all fields before sending.';
                return;
            }

            // Basic email regex pattern validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.className = 'form-feedback error';
                formFeedback.textContent = 'Please enter a valid email address.';
                return;
            }

            // Show success message
            formFeedback.className = 'form-feedback success';
            formFeedback.textContent = 'Thank you! Your message has been submitted.';

            // Clear the form fields
            contactForm.reset();

            // Automatically hide the message after 5 seconds
            setTimeout(() => {
                formFeedback.className = 'form-feedback';
                formFeedback.textContent = '';
            }, 5000);
        });
    }

});


// ================= 4. PROJECT BUTTON PLACEHOLDER HANDLER =================
/**
 * Handles clicking the "View Project" button gracefully
 * Shows a friendly alert indicating project demo/repo availability
 */
function handleProjectClick(event, projectName) {
    event.preventDefault();
    alert(`Thank you for your interest! The demo or code repository for "${projectName}" will be available soon.`);
}
