//Declarion de variables y librerias

import { API } from '../js/config.js';
// import { hotelModels } from '../js/models/hotelModel.js';


consultarHoteles();



function consultarHoteles() {
    // alert("cargando datos" + API.HOTEL);

    fetch(API.HOTEL, { method: 'GET' })
        .then(response => response.json())
        .then(data => pintarTabla(data.data))
        .catch(error => console.error(error));
}


function pintarTabla(dataLista) {
    const baseTabla = document.getElementById('baseTabla');
    baseTabla.innerHTML = '';


    dataLista.forEach(elementoIndividual => {

        let fila = `
          <tr class="table-primary">
                  <td scope="row">${elementoIndividual.id}</td>
                  <td>${elementoIndividual.nombre}</td>
                  <td>${elementoIndividual.correo}</td>
                </tr>
        `;

        baseTabla.innerHTML += fila;

    });
    // id = 0,
    // nombre = "",
    // descripcion = "",
    // telefono = "",
    // correo = "",
    // sitio_web = "",
    // usuario = "",
    // fecha_creacion = "",
    // estado = ""

    console.info(data);
    console.log("Dibujando tabla");
}

