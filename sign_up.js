let nameRef = document.getElementById("name");
let emailref = document.getElementById("email");
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
        top:4.3em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 4.3em;
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
        top: -0.01em;
        left: 11.9em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: -0.01em;
    right: 11.9em;
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

let takeArr = JSON.parse(localStorage.getItem("take")) || [];
// fill in javascript code here
document.querySelector("form").addEventListener("submit", sub)

function sub() {
  event.preventDefault()
  let Name = nameRef.value;
  let Email = emailref.value;
  let Username = usernameRef.value;
  let Password = passwordRef.value;
  if (Name != "" && Email != "" && Username != "" && Password != "") {
    let takeObj = {
      Name,
      Email,
      Username,
      Password
    };
    takeArr.push(takeObj)
    localStorage.setItem("take", JSON.stringify(takeArr));
    window.location.replace("temp.html")
  } else {
    alert("pls. fill all the field !")
  }
}
