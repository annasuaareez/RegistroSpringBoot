package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.modelo.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class UserDAOImp implements UserDAO{
    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public User addUsuario(User usuario) {
        return entityManager.merge(usuario);
    }

    @Override
    public List<User> listaUsuario() {
        return entityManager.createQuery("FROM User").getResultList();
    }

}
