function index() {
    window.location.href = "travel.html";
}

function change() {
    window.location.href = "sign_in.html";
}

document.querySelector("#li>button").addEventListener("click", card);

function card() {
    let x = document.querySelector("#lev");
    let value = x.options[x.selectedIndex].text;
    let y = document.querySelector("#ol input").value;
    
    if(x != "" && y != "" && y.length==10){
        localStorage.setItem("Country_code", value);
        localStorage.setItem("Phone_no", y);

        let f = document.querySelector("#ol input");
        f.style.borderColor="black";
        f.style.backgroundColor="white";
        f.style.color="black";
        f.value="";

        alert("You Will Recieve The Application Link Shortly");
    }else{
        let f = document.querySelector("#ol input");
        f.style.borderColor="red";
        f.style.color="red";

        alert("Please Fill The Mobile Number !")
    }
}

document.querySelector("#ol input").addEventListener("click", reset);

function reset(){
    let f = document.querySelector("#ol input");
    f.style.borderColor="black";
    f.style.backgroundColor="white";
    f.style.color="black";
}



let roku = document.querySelector('.rec');


roku.style.cssText = `
cursor:pointer
`;

let p = localStorage.getItem("putArray");
let data = JSON.parse(p);

for (let i = 0; i < data.length; i++) {
    if (data[i].Username != "" && data[i].Password != "") {
        for (let j = 0; j < data[i].Name.length; j++) {
            if (data[i].Name[j] == " ") {
                let a = data[i].Name.slice(0, j);
                roku.innerHTML = a;
                roku.style.color = 'White';
                break;
            }
        }
        break;
    }
}

roku.addEventListener('click', function(){
    window.location.assign('index.html');
})