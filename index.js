document.addEventListener('DOMContentLoaded', function() {
    // Fix for vh units on mobile:
        // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    
    let vh100 = window.innerHeight;
    document.documentElement.style.setProperty('--vh100', `${vh100}px`);                       
});