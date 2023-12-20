document.addEventListener('DOMContentLoaded', function () {
    // Show loading text animation on page load
    document.getElementById('loadingText').style.display = 'inline-block';

    // Simulate loading delay (replace this with your actual loading logic)
    setTimeout(function () {
        // Hide loading text animation
        document.getElementById('loadingText').style.display = 'none';
    }, 3000); // Change 3000 to your actual loading time in milliseconds
});

function submitForm() {
    // Show loading text animation
    document.getElementById('loadingText').style.display = 'inline-block';

    // Simulate form submission delay (replace this with your actual form submission logic)
    setTimeout(function () {
        // Hide loading text animation
        document.getElementById('loadingText').style.display = 'none';

        // Reset button state
        document.getElementById('submitButton').classList.remove('loading');
    }, 3000); // Change 3000 to your actual form submission time in milliseconds
}
document.addEventListener('contextmenu', function(e){
    alert("Sorry, right click is disabled by Inuka to prevent leakage of confidential functions");
    e.preventDefault();
    });

    document.onkeydown = function(e) {
        if(event.keyCode == 123) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
           return false;
        }
          if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
           return false;
        }
      }
