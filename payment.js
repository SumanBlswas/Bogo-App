function validateForm() {
    var card_number = document.getElementById('card_number').value;
    var cvv = document.getElementById('cvv').value;
    var expiry_date = document.getElementById('expiry_date').value;
    var name = document.getElementById('name').value;
    let num =  Math.floor(100000 + Math.random() * 900000);
    if (card_number == "" || cvv == "" || expiry_date == "" || name == "") {
      alert("All fields must be filled out");
      return false;
    }
    else {
      alert('Your OTP is:-'+num);
      localStorage.setItem('OTP', num);
      window.location.href = "otp.html";
    }
  }

  let p = localStorage.getItem("total-temp");
  document.querySelector("h1").innerHTML="Total Amount to be Paid:-"+p;