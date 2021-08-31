document.addEventListener('DOMContentLoaded', function() {
    // To make the GitHub image have the same height as the Trovare and Restaurant images.
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    var myWorkImages = document.querySelector('.myWorkImgsContainer > div > img');
    var compStyles = window.getComputedStyle(myWorkImages);    
    var myWorkImagesHeight = compStyles.getPropertyValue('height');
    document.querySelector('.github div').style.height = myWorkImagesHeight;
});