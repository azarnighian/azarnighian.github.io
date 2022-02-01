document.addEventListener('DOMContentLoaded', function() {
    // Fix for vh units on mobile:
        // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Do the same thing if screen gets resized, like if device gets rotated
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
});