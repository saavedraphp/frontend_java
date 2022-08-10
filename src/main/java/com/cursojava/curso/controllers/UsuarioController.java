package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.UsuarioDao;
import com.cursojava.curso.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {
    @Autowired

    private UsuarioDao usuarioDao;


    @RequestMapping(value="usuario/{id}")
    public Usuario getUsuario(@PathVariable Long id)
    {   Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Luis");
        usuario.setApellido("Saavedra");
        usuario.setTelefono("980560812");
        usuario.setEmail("saavedraphp@gmail.com");
        usuario.setPassword("123456");
        return usuario;
    }


    @RequestMapping(value="api/usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuarios()
    {
        /*
        List<Usuario> usuarios = new ArrayList<>();

        Usuario usuario1 = new Usuario();
        usuario1.setId(1L);
        usuario1.setNombre("Luis");
        usuario1.setApellido("Saavedra");
        usuario1.setTelefono("980560812");
        usuario1.setEmail("saavedraphp@gmail.com");
        usuario1.setPassword("123456");

        Usuario usuario2 = new Usuario();
        usuario2.setId(2L);
        usuario2.setNombre("Veronica");
        usuario2.setApellido("Sanchez");
        usuario2.setTelefono("98564213");
        usuario2.setEmail("veronica@gmail.com");
        usuario2.setPassword("123456");


        Usuario usuario3 = new Usuario();
        usuario3.setId(3L);
        usuario3.setNombre("Alexander");
        usuario3.setApellido("Canaquiri");
        usuario3.setTelefono("99999999");
        usuario3.setEmail("Canaquiri@gmail.com");
        usuario3.setPassword("123456");

         usuarios.add(usuario1);
        usuarios.add(usuario2);
        usuarios.add(usuario3);
*/
        return usuarioDao.getUsuarios();

    }

    @RequestMapping(value="editar")
    public Usuario editar()
    {   Usuario usuario = new Usuario();
        usuario.setNombre("Luis");
        usuario.setApellido("Saavedra");
        usuario.setTelefono("980560812");
        usuario.setEmail("saavedraphp@gmail.com");
        usuario.setPassword("123456");
        return usuario;
    }
    @RequestMapping(value="api/usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable Long id)
    {
        usuarioDao.eliminar(id);

    }


    @RequestMapping(value="api/usuarios", method = RequestMethod.POST)
    public void registrar(@RequestBody Usuario usuario)
    {

         usuarioDao.registrar(usuario);

    }

}
