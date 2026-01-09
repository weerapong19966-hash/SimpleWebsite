const user = JSON.parse(localStorage.getItem("loginUser"));
if (!user || user.role !== "user") {
    location.href = "index.html";
}

info.innerHTML = `
Username: <b>${user.username}</b><br>
Role: <b>${user.role}</b>
`;

function logout() {
    localStorage.removeItem("loginUser");
    location.href = "index.html";
}
