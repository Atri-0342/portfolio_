function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// TYPING EFFECT
const messages = ["Software Developer",  "Java Developer", "Full Stack Developer"];
const typingSpeed = 100; // milliseconds per character
const deletingSpeed = 50; // milliseconds per character
const pauseBetweenMessages = 1000; // milliseconds

let currentMessageIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const messageElement = document.querySelector(".typedText");
    const currentMessage = messages[currentMessageIndex];

    if (isDeleting) {
        if (currentCharIndex > 0) {
            currentCharIndex--;
            messageElement.textContent = currentMessage.slice(0, currentCharIndex);
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            setTimeout(type, pauseBetweenMessages);
        }
    } else {
        if (currentCharIndex < currentMessage.length) {
            currentCharIndex++;
            messageElement.textContent = currentMessage.slice(0, currentCharIndex);
            setTimeout(type, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(type, pauseBetweenMessages);
        }
    }
}

type();

// CHANGE ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);
