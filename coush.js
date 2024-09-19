document
  .getElementById('add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const addmoneyInput = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    if (inputPinNumber === '1234') {
      console.log('user loing');
      const balance = document.getElementById('account-blances').innerText;
      const newBalance = parseInt(balance) + parseInt(addmoneyInput);
      document.getElementById('account-blances').innerText = newBalance;
    } else {
      alert('wrong input');
    }
  });

document.getElementById('cash-out-btn').addEventListener('click', function () {
  const amountBtn = document.getElementById('input-add-money').value;

  const pinNumber = document.getElementById('input-pin-number').value;
  if (pinNumber === '1234') {
    console.log('cash out monet 400 taka onle');
    const balance = parseFloat(
      document.getElementById('account-blances').innerText
    );
    const nowCorrectBlances = balance - amountBtn;
    document.getElementById('account-blances').innerText = nowCorrectBlances;
  } else {
    alert('Failed to add money! please try again');
  }
});

// add button and cash button js
document.getElementById('cash-out-btn').addEventListener('click', function () {
  document.getElementById('cush-out-form').classList.remove('hidden');
  //hide the add money form
  document.getElementById('add-from').classList.add('hidden');
});

document.getElementById('add-money').addEventListener('click', function () {
  document.getElementById('add-from').classList.remove('hidden');

  document.getElementById('cush-out-form').classList.add('hidden');
});
