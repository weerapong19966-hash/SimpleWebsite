const loginUser = JSON.parse(localStorage.getItem("loginUser"));
if (!loginUser || loginUser.role !== "admin") {
    location.href = "index.html";
}

let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null;

function render() {
    userTable.innerHTML = "";
    users.forEach((u,i)=>{
        userTable.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${u.username}</td>
            <td>${u.role}</td>
            <td>
                <button onclick="editUser(${i})">Edit</button>
                <button onclick="delUser(${i})">Delete</button>
            </td>
        </tr>`;
    });
    localStorage.setItem("users", JSON.stringify(users));
}

function addUser() {
    if (editIndex === null) {
        users.push({
            username: username.value,
            password: password.value,
            role: role.value
        });
    } else {
        users[editIndex] = {
            username: username.value,
            password: password.value,
            role: role.value
        };
        editIndex = null;
    }
    render();
}

function editUser(i) {
    username.value = users[i].username;
    password.value = users[i].password;
    role.value = users[i].role;
    editIndex = i;
}

function delUser(i) {
    users.splice(i,1);
    render();
}

function logout() {
    localStorage.removeItem("loginUser");
    location.href = "index.html";
}

render();
