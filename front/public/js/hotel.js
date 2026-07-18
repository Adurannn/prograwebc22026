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
                  <td>             
                     <a name="" id="" class="btn btn-warning" role="button" onclick="cargarDatosFormulario(${elementoIndividual.id})">Editar</a
                ></td>
                  <td scope="row">${elementoIndividual.id}</td>
                  <td>${elementoIndividual.nombre}</td>
                  <td>${elementoIndividual.descripcion}</td>
                  <td>${elementoIndividual.telefono}</td>
                  <td>${elementoIndividual.correo}</td>
                  <td>${elementoIndividual.sitio_web}</td>
                  <td>${elementoIndividual.usuario}</td>
                  <td>${elementoIndividual.fecha_creacion}</td>
                  <td>${elementoIndividual.estado}</td>
                </tr>
        `;

        baseTabla.innerHTML += fila;

    });

}

window.cargarDatosFormulario = function (id) {
    alert("cargando datos en el formulario" + id);

    //Cargar los datos del hotel en el formulario
    //GET https://paginas-web-cr.com/Api/hotelApi/hotel/hotel.php?id=1 
    fetch(`${API.HOTEL}?id=${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => formularioPintar(data.data[0]))
        .catch(error => console.error(error));

}

function formularioPintar(data) {

    document.getElementById('id').value = data.id;
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('descripcion').value = data.descripcion;
    document.getElementById('telefono').value = data.telefono;
    document.getElementById('correo').value = data.correo;
    document.getElementById('sitio_web').value = data.sitio_web;
    // document.getElementById('usuario').value = data.usuario;
    // document.getElementById('fecha_creacion').value = data.fecha_creacion;
    document.getElementById('estado').value = data.estado;

    const modalHotel = new bootstrap.Modal(document.getElementById('modalHotel'));
    modalHotel.show();
}


// function cargarDatosFormulario(id) {
//     alert("cargando datos en el formulario" + id);

//     //Cargar los datos del hotel en el formulario

// }
