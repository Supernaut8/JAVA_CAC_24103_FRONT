// import { getPeliculas } from "./services/getData.js";

document.addEventListener('DOMContentLoaded', async() => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // const response = await getPeliculas();
    const res = await fetch('http://localhost:8080/api_movies/pelicula', options);

    const data = await res.json();
    // console.log(data);

    const peliculas = data;

    const tbody = document.getElementById('bodyTablePeliculas');

    peliculas.forEach(pelicula => {
        // creamos un tr
        const tr = document.createElement('tr');
        // creamos un td con el titulo de la pelicula
        const tdNombre = document.createElement('td');
        tdNombre.textContent = pelicula.nombre;
        // creamos un td con la duracion de la pelicula
        const tdGenero = document.createElement('td');
        tdGenero.textContent = pelicula.genero;
        // creamos un td con los generos de la pelicula
        const tdDuracion = document.createElement('td');
        tdDuracion.textContent = pelicula.duracion;
        // creamos un td con las clasificaciones de la pelicula
        const tdClasificacion = document.createElement('td');
        tdClasificacion.textContent = pelicula.clasificacion;
        // creamos un td con las valoraciones de la pelicula
        const tdValoracion = document.createElement('td');
        tdValoracion.textContent = pelicula.valoracion;
        // creamos un td con la imagen de la pelicula
        const tdImagen = document.createElement('td');
        const img = document.createElement('img');
        img.src = "../assets/img/" + pelicula.imagen;
        img.width = '150';
        img.alt = pelicula.nombre;
        tdImagen.appendChild(img);
        //agrego la clase a la imagen para que se vea mejor de bootstrap fluid y thumbnail
        img.classList.add('img-fluid');
        img.classList.add('img-thumbnail');
        
        // añadimos los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdGenero);
        tr.appendChild(tdDuracion);
        tr.appendChild(tdClasificacion);
        tr.appendChild(tdValoracion);
        tr.appendChild(tdImagen);
        // añadimos el tr a al body
        tbody.appendChild(tr);

    });
})
