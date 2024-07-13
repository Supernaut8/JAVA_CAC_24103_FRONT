// cuando el dom (modelo de objeto de documento) se cargue
// Este evento se dispara cuando todo el HTML del documento se ha cargado
// y se ha analizado por completo.
document.addEventListener('DOMContentLoaded', async () => {
    // tengo que levantar los datos del formulario, validar los inputs,
    // en caso de algun value vacio, mostrar un mensaje de error
    // y no hacer la peticion fetch
    // si los datos son correctos, realizo la peticion fetch post
    // a la api para agregar una pelicula
    // si la respuesta es correcta, muestro un mensaje de exito y
    // limpio los inputs del formulario
    
    // Obtengo el formulario
    // Aquí, obtenemos una referencia al formulario con el ID formNuevaPelicula.
    formNuevaPelicula = document.getElementById('formNuevaPelicula');


    // Agrego el evento submit al formulario
    // Añadimos un evento que se dispara cuando el formulario se envía.
    // La función que se pasa al listener se ejecutará cada vez que el formulario se envíe.
    formNuevaPelicula.addEventListener('submit', async (e) => {

        // Prevenimos el comportamiento por defecto del formulario
        // Esto evita que el formulario se envíe de la manera tradicional y recargue la página.
        e.preventDefault();

        // Obtener los datos del formulario:
        // Aquí, usamos FormData para extraer los valores de los campos del formulario.
        const formData = new FormData(formNuevaPelicula);

        //obtengo los valores de los inputs
        const nombre = formData.get('nombre');
        const genero = formData.get('genero');
        const duracion = formData.get('duracion');
        const clasificacion = formData.get('clasificacion');
        const valoracion = formData.get('valoracion');
        const imagen = formData.get('imagen');

        // Validar los datos del formulario:
        // Verificamos que todos los campos obligatorios tienen un valor.
        // Si alguno está vacío, mostramos una alerta y detenemos el procesamiento.
        if (nombre === '' || genero === '' || duracion === '' || clasificacion === '' || valoracion === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        console.log(imagen)
        // Preparar los datos para el envío:
        // levanto solo el nombre del file para enviarlo a la api
        // Esta línea simplemente extrae el nombre del archivo seleccionado por el usuario 
        // en el campo de tipo file del formulario y lo guarda en la variable 
        // imageName para su uso posterior en la solicitud HTTP.
        const imagenName = imagen.name;
      
        //configuracion de options, que contiene los detalles de la solicitud POST,
        // incluyendo el método, las cabeceras y el cuerpo. 
        // El cuerpo es un objeto JSON que se convierte en una cadena con JSON.stringify.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                genero: genero,
                duracion: duracion,
                clasificacion: clasificacion,
                valoracion: valoracion,
                imagen: imagenName
            })
        };
        // Realizo la peticion fetch a la api para agregar una pelicula
        const res = await fetch('http://localhost:8080/api_movies/pelicula', options);
        // Utilizamos fetch para enviar la solicitud al servidor y esperamos la respuesta. 
        // Luego, convertimos la respuesta a JSON.
        //obtengo la respuesta
        const data = await res.json();


        // Manejar la respuesta del servidor:
        // si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
        // si el codigo es 201, la pelicula se agrego correctamente
        if (res.status === 201) {
            alert('Pelicula agregada correctamente');
            formNuevaPelicula.reset();
            // que se recargue la pagina para ver la pelicula agregada
            location.reload();
        } else {
            alert('Error al agregar la pelicula');
        }
       
    });

});