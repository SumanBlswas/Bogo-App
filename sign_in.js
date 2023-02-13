let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};
//When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
  normalHandStyle();
});
//When clicked on password input
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

document.querySelector("form").addEventListener("submit", sub)

function sub() {
  event.preventDefault()
  let Username = document.querySelector("#username").value;
  let Password = document.querySelector("#password").value;
  let p = localStorage.getItem("take");
  let data = JSON.parse(p);

  for (let i = 0; i < data.length; i++) {
    if (p == null) {
      alert("Sign Up first to login!")
    } else if (Username == data[i].Username && Password == data[i].Password) {
      alert("Sign in Successful")
    } else if (Username != data[i].Username && Username != "") {
      alert("Username Entered is Wrong!")
    } else if (Password == "" && Username != "") {
      alert("Password can't be empty!")
    } else if (Password != data[i].Password && Username != "") {
      alert("Password Entered is Wrong!")
    } else {
      alert("Pls. fill all the details!")
    }
    if (Username == data[i].Username && Password == data[i].Password) {
      let putArray = [];
      putArray = JSON.parse(localStorage.getItem("putArray"))
      if (putArray == null) {
        putArray = [];
      }
      putArray.push(data[i])
      localStorage.setItem("putArray", JSON.stringify(putArray))
      location.assign("index.html")
    }
  }
}
