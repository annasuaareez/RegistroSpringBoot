async function register() {
    //event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (username === "" || password === "" || confirmPassword === "") {
        document.getElementById("message").textContent = "Por favor, complete todos los campos";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Las contraseñas no coinciden";
        return;
    }

    const response = await fetch("/register", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre:username, contrasena:password })
    });

    let prueba = await response.json()

    if (prueba.id) {
        window.location.replace("../login.html")
    } else {
        document.getElementById("message").textContent = "El registro falló, nombre de usuario ya existe";
    }

}