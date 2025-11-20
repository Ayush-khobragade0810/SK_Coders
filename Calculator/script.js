var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');

let buttons = {};
['add', 'sub', 'mul', 'div', 'eq'].forEach(id => {
    buttons[id] = document.getElementById(id + 'Button');
});

[input1, input2].forEach(inp =>
    inp.addEventListener('focus', () => focused = inp)
);

for (let btn of document.querySelectorAll('.col button')) {
    btn.onclick = () => {
        if (!focused) focused = input1;

        if (focused.value === 'Enter Number' || focused.value === 'Enter Number ') {
            focused.value = '';
        }

        focused.value += btn.textContent.trim();
    };
}

const symbols = { add: '+', sub: '-', mul: '*', div: '/' };

Object.entries(buttons).forEach(([op, btn]) => {
    if (symbols[op]) {
        btn.addEventListener('click', () => {
            currentOp = op;
            input3.value = symbols[op];
        });
    }
});

buttons.eq.addEventListener('click', () => {
    var operand1 = parseFloat(input1.value);
    var operand2 = parseFloat(input2.value);

    if (isNaN(operand1) || isNaN(operand2)) {
        input4.value = 'Enter valid numbers';
        return;
    }

    let res;
    switch (currentOp) {
        case 'add': res = operand1 + operand2; break;
        case 'sub': res = operand1 - operand2; break;
        case 'mul': res = operand1 * operand2; break;
        case 'div':
            if (operand2 === 0) {
                res = 'Error: ÷0';
            } else {
                res = operand1 / operand2;
            }
            break;
        default: res = 'Select operation';
    }

    input4.value = res;
});

input1.addEventListener('focus', function () {
    if (this.value === 'Enter Number' || this.value === 'Enter Number ') {
        this.value = '';
    }
});

input2.addEventListener('focus', function () {
    if (this.value === 'Enter Number') {
        this.value = '';
    }
});