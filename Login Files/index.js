// logine

document
  .getElementById('button-login')
  .addEventListener('click', function (event) {
    event.preventDefault();
  
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-Number').value;
    if (phoneNumber === '5' && pinNumber === '1234') {
      console.log('user loing')
    } else {
      alert('wrong input')
    }
    
  });


