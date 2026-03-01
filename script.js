let lastTap = 0;

const lamp = document.getElementById("lamp");
const loginBox = document.getElementById("loginBox");

lamp.addEventListener("click", function () {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 400 && tapLength > 0) {
        openLogin();
    }

    lastTap = currentTime;
});

function openLogin() {
    loginBox.classList.add("active");
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const correctUser = "dharun";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        window.location.href = "https://dharunkumar0510.github.io/dharun_portfolio/";
    } else {
        error.innerText = "Invalid Credentials!";
    }
}
