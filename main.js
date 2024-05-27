
let bill = document.getElementById('inputBill');
let count = document.getElementById('inputCount');

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

let result = document.getElementById('result');
let result2 = document.getElementById('result2');



btn.addEventListener('click', function() {
    result.innerText = bill.value * 0.15;

})

btn2.addEventListener('click', function() {
    result2.innerText = (bill.value - bill.value*0.15 )/ count.value;
});

