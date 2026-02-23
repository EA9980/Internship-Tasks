// Form Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s-()+]{10,}$/;
    return phone === '' || re.test(phone);
}

// Registration Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Full Name validation
            const fullName = document.getElementById('fullName');
            const fullNameError = document.getElementById('fullNameError');
            if (fullName.value.trim() === '') {
                fullNameError.textContent = 'Full name is required';
                isValid = false;
            } else {
                fullNameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            if (!validateEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Password validation
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            if (password.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            
            // Confirm Password validation
            const confirmPassword = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (confirmPassword.value !== password.value) {
                confirmPasswordError.textContent = 'Passwords do not match';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }
            
            // Phone validation (optional)
            const phone = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            if (phone.value !== '' && !validatePhone(phone.value)) {
                phoneError.textContent = 'Please enter a valid phone number';
                isValid = false;
            } else {
                phoneError.textContent = '';
            }
            
            // Terms validation
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                alert('Please agree to the Terms and Conditions');
                isValid = false;
            }
            
            if (isValid) {
                // Store user data in localStorage (simulating backend)
                const userData = {
                    fullName: fullName.value,
                    email: email.value,
                    phone: phone.value
                };
                localStorage.setItem('user_' + email.value, JSON.stringify(userData));
                
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            }
        });
    }
    
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const email = document.getElementById('loginEmail');
            const emailError = document.getElementById('loginEmailError');
            if (!validateEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            const password = document.getElementById('loginPassword');
            const passwordError = document.getElementById('loginPasswordError');
            if (password.value === '') {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            
            if (isValid) {
                // Check if user exists in localStorage
                const userData = localStorage.getItem('user_' + email.value);
                if (userData) {
                    alert('Login successful! Welcome back.');
                    window.location.href = 'index.html';
                } else {
                    alert('Invalid email or password');
                }
            }
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('contactName');
            const nameError = document.getElementById('contactNameError');
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('contactEmail');
            const emailError = document.getElementById('contactEmailError');
            if (!validateEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Subject validation
            const subject = document.getElementById('subject');
            const subjectError = document.getElementById('subjectError');
            if (subject.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
                isValid = false;
            } else {
                subjectError.textContent = '';
            }
            
            // Message validation
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
