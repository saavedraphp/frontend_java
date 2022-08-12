// Call the dataTables jQuery plugin
$(document).ready(function() {

});

async function login()
{
    let datos = {};
    datos.email = document.getElementById('email').value;
    datos.password = document.getElementById('password').value;



  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

    const respuesta = await request.text();

    if(respuesta =='OK'){
        window.location.href = 'usuarios.html'
    }else
    {   alert("Las credenciales son incorrectas!"+respuesta+' valor');
        consola.log(respuesta);
    }





}
