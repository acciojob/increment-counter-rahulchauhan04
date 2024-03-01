// Place this code inside the <script> tag in the HTML
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('incrementBtn');
    var display = document.getElementById('counter');

    btn.addEventListener('click', function() {
        // Alert the current value before increment
        alert(display.textContent);

        // Increment the counter
        display.textContent = parseInt(display.textContent) + 1;
    });
});
