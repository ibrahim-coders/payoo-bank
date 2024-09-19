document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const addmoneyInput = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    if (inputPinNumber === '1234') {
      console.log('adding money to your account');

      const balance = document.getElementById('account-blances').innerText;
      console.log(balance);
      const newBalance = parseInt(balance) + parseInt(addmoneyInput);

      document.getElementById('account-blances').innerText = newBalance;
    } else {
      alert('Failed to add money! please try again');
    }
  });
