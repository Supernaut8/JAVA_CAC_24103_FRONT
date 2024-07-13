const apiUrl = "http://localhost:8080/api_movies/pelicula";

const getPelicula = async(id) => {
    try {
        const res = await fetch(`${apiUrl}/pelicula/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}

const getPeliculas = async() => {
    try {
        const res = await fetch(`${apiUrl}/pelicula`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}

export { getPelicula, getPeliculas };