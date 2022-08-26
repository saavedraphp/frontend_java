// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#dtUsuarios').DataTable();
  document.getElementById('label_user_login').outerHTML = localStorage.email;
});




async function cargarUsuarios()
{

      const request = await fetch('api/usuarios', {
        method: 'GET',
        headers:  getHeader()
      });


      const usuarios = await request.json();

        //console.log(usuarios);
        let listadoHtml = '';



  for(let usuario of usuarios)
  {
      let telefonoTexto = usuario.telefono == null? '-' : usuario.telefono;
      let btmEliminar ='<a href="#" onclick="eliminarUsuario(' +usuario.id+ ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>'
      let  fila = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+'</td><td>'+usuario.apellido+
                    '</td><td>'+telefonoTexto+'</td><td>'+usuario.email+'</td><td>'+btmEliminar+'</td></tr>'
      listadoHtml += fila;
  }

document.querySelector('#dtUsuarios tbody').outerHTML=listadoHtml;

}



    function getHeader()
    {   return{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization':localStorage.token
        };
    }


    async function eliminarUsuario(id)
    {

        if(confirm('¿Desea eliminar Usuario ' +id))
        {
             const request = await fetch('api/usuarios/'+id, {
               method: 'DELETE',
               headers: getHeader()

             });

             location.reload();
        }



    }
