let tapCount = 0;
let timer;

const lamp = document.getElementById("lamp");
const loginBox = document.getElementById("loginBox");

lamp.addEventListener("click", function() {
    tapCount++;

    if(tapCount === 1){
        timer = setTimeout(() => {
            tapCount = 0;
        }, 300);
    } else if(tapCount === 2){
        clearTimeout(timer);
        tapCount = 0;
        openLogin();
    }
});

function openLogin(){
    loginBox.classList.add("active");
}

function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const correctUser = "dharun";
    const correctPass = "1234";

    if(username === correctUser && password === correctPass){
        window.location.href = "https://dharunkumar0510.github.io/dharun_portfolio/";
    } else {
        error.innerText = "Invalid Credentials!";
    }
}
