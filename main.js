
let bill = document.getElementById('inputBill');
let count = document.getElementById('inputCount');
let btn = document.getElementById('btn');
let result = document.getElementById('result');


btn.addEventListener('click', function() {
    result.innerText = bill.value * 0.15 / count.value;
});

