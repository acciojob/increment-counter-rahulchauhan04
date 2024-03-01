document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('incrementBtn');
    var display = document.getElementById('counter');

    btn.addEventListener('click', function() {
        // Alert the current value before increment
        var currentValue = parseInt(display.textContent, 10);
        alert(currentValue);

        // Increment the counter
        display.textContent = currentValue + 1;
    });
});
