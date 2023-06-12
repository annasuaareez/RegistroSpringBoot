$(document).ready(function () {
    cargarAlumnos();
});

async function cargarAlumnos() {
    const request = await fetch('/listar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const alumnos = await request.json();
    console.log(alumnos);


    let listadoHTML = "";
    for (let alumno of alumnos) {
        let fila = '<tr data-id="' + alumno.id + '"><td>' + alumno.id + '</td><td class="car-name">' + alumno.nombre + '</td><td>' + alumno.nota + '</td><td><button onclick="eliminar(' + alumno.id + ')">Eliminar</button><button onclick="openDialog(\'dialog1\', ' + alumno.id + ')">Editar</button></td></tr>';
        listadoHTML = listadoHTML + fila;
    }
    document.querySelector('#alumno tbody').outerHTML = listadoHTML;
}

function buscar() {
    let inputB = document.getElementById('search-input').value.toLowerCase();
    let filas = document.querySelectorAll('#alumno tbody tr');

    for (let fila of filas) {
        let id = fila.getAttribute('data-id').toLowerCase();
        let nombre = fila.querySelector('.car-name').textContent.toLowerCase();
        let nota = fila.querySelector('td:nth-child(3)').textContent.toLowerCase();

        if (id.includes(inputB) || nombre.includes(inputB) || nota.includes(inputB)) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    }
}

async function eliminar(id) {
    const request = await fetch('/eliminar/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    location.reload();
}

async function add() {
    let datos = {};
    datos.nombre = document.getElementById('txtAlumno').value;
    datos.nota = document.getElementById('txtNota').value;

    if (datos.nombre === "" || datos.nota === "") {
        document.getElementsByClassName("message")[1].textContent = "Por favor, complete todos los campos";
        return;
    }

    if (datos.nota < 0 || datos.nota>10) {
        document.getElementsByClassName("message")[1].textContent = "La nota debe ser superior a 0 e inferior a 10";
        return;
    }

    const request = await fetch('/add/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    location.reload();
}

async function edit() {
    let datos = {};
    datos.id = document.getElementById('idAlumno').value;
    datos.nombre = document.getElementById('txtAlumnoNuevo').value;
    datos.nota = document.getElementById('txtNotaNueva').value;

    if (datos.id === "" || datos.nombre === "" || datos.nota === "") {
        document.getElementsByClassName("message")[0].textContent = "Por favor, complete todos los campos";
        return;
    }

    if (datos.nota < 0 || datos.nota>10) {
        document.getElementsByClassName("message")[0].textContent = "La nota debe ser superior a 0 e inferior a 10";
        return;
    }

    const request = await fetch('/edit/' + datos.id + '/' + datos.nombre + '/' + datos.nota, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    location.reload();
}


function openDialog(dialogId, id) {
    cambiarValor(id);
    document.getElementById(dialogId).showModal();
}

function cambiarValor(id) {
    document.getElementById('idAlumno').value = id;
    // Cambiar valor del campo de entrada oculto por el ID
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.close();
}
