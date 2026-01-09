let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null;

function renderUsers() {
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((u, i) => {
        table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${u.username}</td>
            <td>${u.password}</td>
            <td>
                <button class="edit" onclick="editUser(${i})">Edit</button>
                <button class="delete" onclick="deleteUser(${i})">Delete</button>
            </td>
        </tr>
        `;
    });

    localStorage.setItem("users", JSON.stringify(users));
}

function addUser() {
    const user = username.value;
    const pass = password.value;

    if (!user || !pass) {
        alert("Fill all fields");
        return;
    }

    if (editIndex === null) {
        users.push({ username: user, password: pass });
    } else {
        users[editIndex] = { username: user, password: pass };
        editIndex = null;
    }

    username.value = "";
    password.value = "";
    renderUsers();
}

function editUser(index) {
    username.value = users[index].username;
    password.value = users[index].password;
    editIndex = index;
}

function deleteUser(index) {
    if (confirm("Delete this user?")) {
        users.splice(index, 1);
        renderUsers();
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

// PROTECT PAGE
if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
}

renderUsers();
