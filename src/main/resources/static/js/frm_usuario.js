// Call the dataTables jQuery plugin
$(document).ready(function() {

});

async function registrar()
{
    let datos = {};
    datos.nombre = document.getElementById('nombre').value;
    datos.apellido = document.getElementById('apellido').value;
    datos.email = document.getElementById('email').value;
    datos.password = document.getElementById('password').value;


    if(datos.password != document.getElementById('re_password').value)
    {
        alert('Las contraseñas no coninciden');
        return;
    }



  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

    alert("La cuenta fue creada con exito!");
    window.location.href = 'usuarios.html'


}


