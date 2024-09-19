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
