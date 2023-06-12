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
        let fila = '<tr><td>' + alumno.id + '</td><td>' + alumno.nombre + '</td><td>' + alumno.nota + '</td></tr>';
        listadoHTML = listadoHTML + fila;
    }
    document.querySelector('#alumnos tbody').innerHTML = listadoHTML;

}