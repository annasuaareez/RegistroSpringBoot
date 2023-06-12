package com.example.conexionphpmyadmin.DAO;
import com.example.conexionphpmyadmin.modelo.Alumno;
import java.util.List;
public interface AlumnoDAO {
    List<Alumno> listarAlumnos();
    void delete(int id);
    void add(Alumno alumno);
    void edit(int id, String nombre, double nota);
}
