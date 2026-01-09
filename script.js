let users = JSON.parse(localStorage.getItem("users")) || [
    { username: "admin", password: "1234", role: "admin" }
];

function register() {
    const user = regUser.value;
    const pass = regPass.value;

    if (!user || !pass) {
        alert("Fill all fields");
        return;
    }

    users.push({ username: user, password: pass, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Register success!");
    location.hash = "login";
}

function login() {
    const user = loginUser.value;
    const pass = loginPass.value;

    const found = users.find(
        u => u.username === user && u.password === pass
    );

    if (!found) {
        alert("Invalid login");
        return;
    }

    localStorage.setItem("loginUser", JSON.stringify(found));

    if (found.role === "admin") {
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "user-dashboard.html";
    }
}
