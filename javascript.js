document.querySelectorAll('.calculator .buttons input[type="button"]').forEach(button => {
    button.addEventListener('click', function() {
        const value = button.value;
        const display = document.getElementById('display');
        
        if (value === 'AC') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            if (display.value === '0') {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});
