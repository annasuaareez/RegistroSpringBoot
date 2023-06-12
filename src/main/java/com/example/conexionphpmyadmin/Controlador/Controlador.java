package com.example.conexionphpmyadmin.Controlador;

import com.example.conexionPHPMyAdmin.Model.Alumno;
import com.example.conexionphpmyadmin.DAO.AlumnoDAO;
import com.example.conexionphpmyadmin.DAO.UserDAO;
import com.example.conexionphpmyadmin.DAO.UserDAOImp;
import com.example.conexionphpmyadmin.modelo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class Controlador {
    @Autowired
    AlumnoDAO alumnaDAO;

    @GetMapping("/listar")
    public List<Alumno> listar() {
        return alumnaDAO.listarAlumnos();
    }

    @DeleteMapping("/eliminar/{id}")
    public void delete(@PathVariable int id) {
        alumnaDAO.delete(id);
    }

    @PostMapping("/add/")
    public void add(@RequestBody Alumno alumno) {
        alumnaDAO.add(alumno);
    }

    @PutMapping("/edit/{id}/{nombre}/{nota}")
    public void editAlumno(@PathVariable int id, @PathVariable String nombre, @PathVariable double nota) {
        alumnaDAO.edit(id, nombre, nota);
    }

}
