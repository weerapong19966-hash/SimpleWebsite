function register() {
    const user = regUser.value;
    const pass = regPass.value;

    if (!user || !pass) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Register success!");
    location.hash = "login";
}

function login() {
    const user = loginUser.value;
    const pass = loginPass.value;

    if (
        user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")
    ) {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}
