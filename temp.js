let firstName = document.getElementById("firstName");

let getArray = localStorage.getItem("take");
let arr = JSON.parse(getArray);
for (let i = 0; i < arr.length; i++) {
  firstName.innerHTML = "Welcome!" + "\n" + arr[i].Name;
}

function start() {
  var t = setTimeout(function () {
    window.location = "sign_in.html";
  }, 7000);
}