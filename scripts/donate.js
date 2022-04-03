// querySelectors

let laptopDonation = document.querySelector('#laptop-donation');

let laptopDonor = document.querySelector('#laptop-donor');

let cashDonation = document.querySelector('#cash-donation');

let cashDonor = document.querySelector('#cash-donor');

let bankTransfer = document.querySelector('#bank-transfer');

let cardPayment = document.querySelector('#card-payment');

let paymentFrequency = document.querySelector('#payment-frequency');

let oncePayment = document.querySelector('#once-payment');

let recurringPayment = document.querySelector('#recurring-payment');

let paymentData = document.querySelector('#payment-data');

// event listeners

laptopDonation.addEventListener('click', function() {
  cashDonation.disabled = !cashDonation.disabled;
  showLaptopDonor();
});

cashDonation.addEventListener('click', function() {
  laptopDonation.disabled = !laptopDonation.disabled;
  showCashDonor();
});

bankTransfer.addEventListener('click', function() {
  cardPayment.disabled = !cardPayment.disabled;
  showBankTransfer();
});

cardPayment.addEventListener('click', function() {
  bankTransfer.disabled = !bankTransfer.disabled;
  showPaymentFrequency()
});

oncePayment.addEventListener('click', function() {
  recurringPayment.disabled = !recurringPayment.disabled;
  oncePaymentClicked();
  showPaymentData();
} );

recurringPayment.addEventListener('click', function() {
  oncePayment.disabled = !oncePayment.disabled;
  recurringPaymentClicked();
  showPaymentData();
});

// functions and event handlers

function showLaptopDonor() { 
  laptopDonation.classList.toggle('clicked');
  laptopDonor.classList.toggle('hidden');
  laptopDonor.scrollIntoView();
}

function showCashDonor() {
  cashDonation.classList.toggle('clicked')
  cashDonor.classList.toggle('hidden');
  cashDonor.scrollIntoView();
}

function showBankTransfer() { 
  bankTransfer.classList.toggle('clicked')
  laptopDonor.classList.toggle('hidden');
  laptopDonor.scrollIntoView();
} 

function showPaymentFrequency() { 
  cardPayment.classList.toggle('clicked')
  paymentFrequency.classList.toggle('hidden');
  paymentFrequency.scrollIntoView();
}

function oncePaymentClicked() {
  oncePayment.classList.toggle('clicked')
}

function recurringPaymentClicked() {
  recurringPayment.classList.toggle('clicked')
}

function showPaymentData() { 
  paymentData.classList.toggle('hidden');
  paymentData.scrollIntoView();
} 