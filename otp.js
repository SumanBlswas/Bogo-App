let p = localStorage.getItem('OTP');
let OTP = parseInt(p);
function validateForm() {
    var otp = document.getElementById('otp').value;
    if (otp == "") {
      alert("OTP must be filled out");
      return false;
    }
    if (otp != OTP) {
      alert("Error");
      return false;
    }
    else {
      alert("Payment Successful");
      window.location.assign('temp-1.html');
    }
  }
  
  function fun(){
      window.location.replace("mens.html");
  }