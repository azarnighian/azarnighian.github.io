document.addEventListener('DOMContentLoaded', function() {
    // Fix for vh units on mobile:
        // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);        
});