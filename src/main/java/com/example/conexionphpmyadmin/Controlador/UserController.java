package com.example.conexionphpmyadmin.Controlador;

import com.example.conexionphpmyadmin.DAO.UserDAO;
import com.example.conexionphpmyadmin.modelo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserDAO userDAO;

    @PostMapping("/register")
    public User register(@RequestBody User user) {return userDAO.addUsuario(user);}

    @GetMapping("/usuarios")
    public List<User> listaUsuarios() {
        return userDAO.listaUsuario();
    }
}
