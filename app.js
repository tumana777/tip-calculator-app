const billAmountEl = document.getElementById('bill-amount');
const tipRateEl = document.querySelectorAll('.tip-rate');
const peopleAmountEl = document.getElementById('people-amount');
const tipAmountEl = document.getElementById('tip-amount-result');
const totalAmountEl = document.getElementById('total-amount-result');
const customEl = document.getElementById('button-custom');
const resetBtn = document.getElementById('reset-btn');

let billAmount, peopleAmount, tipAmount, totalAmount;

let tipRate = 0.15;

billAmountEl.addEventListener('input', calculate);

peopleAmountEl.addEventListener('input', calculate);

tipRateEl.forEach((tipRates) => {
    tipRates.addEventListener('click', changeRate);
});

customEl.addEventListener('input', customRate);

resetBtn.addEventListener('click', reset);

function calculate() {
    billAmount = +billAmountEl.value;
    peopleAmount = +peopleAmountEl.value;
    tipAmount = billAmount * tipRate;
    totalAmount = billAmount + tipAmount;
    tipAmountEl.innerText = `$${tipAmount/peopleAmount}`;
    totalAmountEl.innerText = `$${totalAmount/peopleAmount}`;
    resetBtn.classList.add('reset-btn');
};

function changeRate(click) {
    tipRateEl.forEach((tipRates) => {
        tipRates.classList.remove('active');
        if(click.target.innerText == tipRates.innerText){
            tipRates.classList.add('active');
            tipRate = parseInt(tipRates.innerText)/100;
        }
    });
    calculate();
};

function customRate(){
    tipRate = customEl.value/100;
    calculate();
};

function reset(){
    tipRateEl[2].click();
    tipAmountEl.innerText = '$0.00';
    totalAmountEl.innerText = '$0.00';
    billAmountEl.value = '';
    peopleAmountEl.value = '';
    resetBtn.classList.remove('reset-btn');
}