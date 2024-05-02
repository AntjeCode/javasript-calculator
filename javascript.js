let lastOperator = '';
let operators = ['+', '-', '*', '/'];

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
            
        } else if (display.value === '0' && /[0-9]/.test(value)) {
            display.value = value;

        } else {
            if (operators.includes(value) && operators.includes(lastOperator)) {
                display.value = display.value.slice(0, -1) + value;
            } else {
                display.value += value;
            }
            lastOperator = value; 
        }        
    });
});
