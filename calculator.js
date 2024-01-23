document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn7').addEventListener('click', function () {
        appendToDisplay('7');
    });

    document.getElementById('btn8').addEventListener('click', function () {
        appendToDisplay('8');
    });

    document.getElementById('btn9').addEventListener('click', function () {
        appendToDisplay('9');
    });

    document.getElementById('btnDivide').addEventListener('click', function () {
        appendToDisplay('/');
    });

    document.getElementById('btn4').addEventListener('click', function () {
        appendToDisplay('4');
    });

    document.getElementById('btn5').addEventListener('click', function () {
        appendToDisplay('5');
    });

    document.getElementById('btn6').addEventListener('click', function () {
        appendToDisplay('6');
    });

    document.getElementById('btnMultiply').addEventListener('click', function () {
        appendToDisplay('*');
    });

    document.getElementById('btn1').addEventListener('click', function () {
        appendToDisplay('1');
    });

    document.getElementById('btn2').addEventListener('click', function () {
        appendToDisplay('2');
    });

    document.getElementById('btn3').addEventListener('click', function () {
        appendToDisplay('3');
    });

    document.getElementById('btnSubtract').addEventListener('click', function () {
        appendToDisplay('-');
    });

    document.getElementById('btn0').addEventListener('click', function () {
        appendToDisplay('0');
    });

    document.getElementById('btnDot').addEventListener('click', function () {
        appendToDisplay('.');
    });

    document.getElementById('btnEquals').addEventListener('click', function () {
        calculate();
    });

    document.getElementById('btnAdd').addEventListener('click', function () {
        appendToDisplay('+');
    });

    document.getElementById('btnClear').addEventListener('click', function () {
        clearDisplay();
    });
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
