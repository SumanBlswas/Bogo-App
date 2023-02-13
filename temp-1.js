let firstName = document.getElementById("firstName");

let getArray = localStorage.getItem("take");
let arr = JSON.parse(getArray);
for (let i = 0; i < arr.length; i++) {
  firstName.innerHTML = "Welcome!" + "\n" + arr[i].Name;
}

function start() {
  var t = setTimeout(function () {
    window.location = "index.html";
  }, 7000);
}