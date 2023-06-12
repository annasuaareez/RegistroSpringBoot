package com.example.conexionphpmyadmin.DAO;

import com.example.conexionPHPMyAdmin.Model.Alumno;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class AlumnoDAOImp implements AlumnoDAO{
    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Alumno> listarAlumnos() {
        String sql="From Alumno";
        return entityManager.createQuery(sql).getResultList();
    }

    @Override
    public void delete(int id) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        entityManager.remove(alumno);
    }

    @Override
    public void add(Alumno alumno) {
        entityManager.merge(alumno);
    }

    @Override
    public void edit(int id, String nombre, double nota) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        alumno.setId(id);
        alumno.setNombre(nombre);
        alumno.setNota(nota);
        add(alumno);
        entityManager.merge(alumno);
    }
}
