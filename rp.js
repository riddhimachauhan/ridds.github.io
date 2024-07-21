$(document).ready(function() {
    // Initialize Slick carousel
    $('.portfolio-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Toggle menu visibility
    function toggleMenu() {
        document.getElementById('nav-menu').classList.toggle('expanded');
    }
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);

    // Typing effect
    const texts = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
    let index = 0;
    const speed = 150;
    const eraseSpeed = 100;
    const holdTime = 1000;
    const dynamicTextElement = document.getElementById('dynamic-text');
    
    function typeText() {
        let text = texts[index];
        let i = 0;

        function type() {
            if (i < text.length) {
                dynamicTextElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(eraseText, holdTime);
            }
        }

        function eraseText() {
            if (i > 0) {
                dynamicTextElement.textContent = text.substring(0, i - 1);
                i--;
                setTimeout(eraseText, eraseSpeed);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(typeText, holdTime);
            }
        }

        type();
    }

    typeText();

    // Countdown Timer
    function updateCountdown() {
        const birthdayDate = new Date("2024-10-06T00:00:00"); // Correct date format for October 6
        const now = new Date();
        const timeDifference = birthdayDate - now;

        if (timeDifference <= 0) {
            document.getElementById('countdown-container').innerHTML = "It's your birthday!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours;
        document.getElementById('countdown-minutes').textContent = minutes;
        document.getElementById('countdown-seconds').textContent = seconds;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Form Validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function(event) {
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 800);
        }
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dynamic Year Update
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
