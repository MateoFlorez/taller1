//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE=SERVIDOR DE SPOTIFY
let uri="https://api.spotify.com/v1/artists/6nvMHST6D3nERFTOoCDqby/top-tracks?market=US";

let token="Bearer BQCIVUGmPsKVOljpkoZhM2uvD_cFhfWdhz9cVUDnowG-M-jil_F4JBUrdLl6bCT1aet5yvghvw3CA2f0g01RNzkFH76PohQJ7FO56uvkbw3FP5yWIBVf1_MIRCLd4lhx6pu5J4vxDfIlq6JLWeaPxqViy9twCXI"

let parametrosEnvio={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
    /*console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].album.images[0])
    console.log(respuesta.tracks[0].album.images[0].url)*/
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")

    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)

        //Crear un div con JS
        let columna=document.createElement("div")
        columna.classList.add("col")

        //Crear un div que sirve de tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //Crear una img
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}