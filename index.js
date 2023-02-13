window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener('scroll', function () {
    let welcome = document.querySelector("section>h1");
    welcome.classList.toggle("sticky", window.scrollY > 0);
})

let klo = document.querySelector('.ol');

klo.addEventListener('click', function(){
    window.open('Admin-sign.html')
})

let sign_in = document.querySelector(".vo");
sign_in.addEventListener('click', function () {
    window.open("sign_in.html");
})

let sign_up = document.querySelector(".container>div>div:nth-child(4)>div>button");
sign_up.addEventListener('click', function () {
    window.open("sign_up.html");
})

let fig = document.querySelector('#it');
fig.addEventListener('click', function () {
    alert("Do you really wanna delete your account?")
    localStorage.removeItem('putArray');
    localStorage.removeItem('take');
    window.location.replace("index.html");
})

let p = localStorage.getItem("putArray");
let data = JSON.parse(p);

for (let i = 0; i < data.length; i++) {
    if (data[i].Username != "" && data[i].Password != "") {
        document.querySelector("span>h1").innerHTML = "Welcome!.." + data[i].Name;
        document.querySelector("span>h1").setAttribute("data-text", "Welcome!.." + data[i].Name);
        let bog = document.querySelector("header>div>ul>li:nth-child(6)");
        bog.innerHTML = "Log Out➡️";
        bog.style.color = "red";
        bog.style.cursor = "pointer";
        bog.addEventListener("click", function () {
            localStorage.removeItem('putArray');
            window.location.reload("index.html")
        })
        document.querySelector("span>h1").style.cssText = `
        font-size:4vw;
  `
        for (let j = 0; j < data[i].Name.length; j++) {
            if (data[i].Name[j] == " ") {
                let a = data[i].Name.slice(0, j);
                document.querySelector("span>h1").setAttribute("data-text", "Welcome," + a);
                document.querySelector("span>h1").innerHTML = "Welcome," + a;
                document.querySelector("span>h1").style.cssText = `
        font-size:4.7vw;
        text-align:center;
        `;
                break;
            }
        }
        break;
    }
}
let alu = document.querySelector('.revv1 img');
let vlu = document.querySelector('#revv2 img');
let blu = document.querySelector('ul');
let li = document.querySelector('.io');
alu.addEventListener('click', function () {
    document.querySelector('header>div').classList.toggle('kito');
    alu.style.display = "none";
    vlu.style.display = "block";
    blu.style.cssText = `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:70%;
    height:70%;
    opacity:1;
    margin-top:2em;
`
    let bog = document.querySelector("header>div>ul>li:nth-child(6)");
    bog.style.color = "white";
    ;
    li.style.cssText = `
opacity:1;
`
})


vlu.addEventListener('click', function () {
    document.querySelector('header>div').classList.toggle('kito');
    vlu.style.display = "none";
    alu.style.display = "block";
    blu.style.cssText = `
    opacity:0;
    `;
})

let flu = document.querySelector('fik');

fik.addEventListener('click', function(){
    window.location.assign('product-page.html');
})