async function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const response = await fetch("/usuarios", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        //body: JSON.stringify({ nombre: username, contrasena: password })
    });

    let usuarios = await  response.json()

    let encontrarUsuario = usuarios.find(user => user.nombre === username && user.contrasena === password);

    if (encontrarUsuario) {
        if (username === "admin" && password === "1234") {
            window.location.href = "../crud.html";
        } else {
            window.location.href = "../alumnos.html";
        }
    } else {
        document.getElementById("message").innerText = "Credenciales inválidas";
    }
}
