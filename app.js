const billAmountEl = document.getElementById('bill-amount');
const tipRateEl = document.querySelectorAll('.tip-rate');
const peopleAmountEl = document.getElementById('people-amount');
const tipAmountEl = document.getElementById('tip-amount-result');
const totalAmountEl = document.getElementById('total-amount-result');
const customEl = document.getElementById('button-custom');
const resetBtn = document.getElementById('reset-btn');
const errorEl = document.getElementsByTagName('p');

let billAmount, peopleAmount, tipAmount, totalAmount;

let tipRate = 0.15;

billAmountEl.addEventListener('input', calculate);
billAmountEl.addEventListener('click', ()=>{
    billAmountEl.value = '';
});

peopleAmountEl.addEventListener('input', calculate);

tipRateEl.forEach((tipRates) => {
    tipRates.addEventListener('click', changeRate);
});

customEl.addEventListener('input', customRate);
customEl.addEventListener('click', customRate);

resetBtn.addEventListener('click', ()=>{
    tipRateEl[2].click();
    tipAmountEl.innerText = '$0.00';
    totalAmountEl.innerText = '$0.00';
    billAmountEl.value = '';
    peopleAmountEl.value = '';
    customEl.value = '';
    resetBtn.classList.remove('reset-btn');
});

function calculate() {
    billAmount = +billAmountEl.value;
    peopleAmount = +peopleAmountEl.value;
    tipAmount = billAmount * tipRate;
    totalAmount = billAmount + tipAmount;

    if (peopleAmount != 0) {
        tipAmountEl.innerText = `$${tipAmount/peopleAmount}`;
        totalAmountEl.innerText = `$${totalAmount/peopleAmount}`;
        resetBtn.classList.add('reset-btn');
        errorEl[0].style.display = 'none';
        peopleAmountEl.style.border = 'none';
    }else{
        errorEl[0].style.display = 'inline-block';
        peopleAmountEl.style.border = '2px solid #E17052';
    }
};

function changeRate(click) {
    tipRateEl.forEach((tipRates) => {
        tipRates.classList.remove('active');
        if (click.target.innerText == tipRates.innerText) {
            tipRates.classList.add('active');
            tipRate = parseInt(tipRates.innerText) / 100;
        }
    });
    calculate();
};

function customRate() {
    tipRate = customEl.value / 100;
    calculate();
};