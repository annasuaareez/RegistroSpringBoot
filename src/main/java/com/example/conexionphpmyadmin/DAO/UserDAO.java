package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.modelo.User;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface UserDAO {
    User addUsuario(User usuario);
    List<User> listaUsuario();
}
