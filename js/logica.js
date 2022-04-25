fetch('..json/clases.json')

.then(promesa => promesa.json())

.then(data => {
    data.forEach((productosEnArray, indice) => {

        if(divProductos != null ){

            divProductos.innerHTML += `
            <div id="producto${indice} class="col pb-3">
                <div class="card h-100">
                    <img src="../assets/img/productos/${productosEnArray.img}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            ${productosEnArray.nombre}
                        </h5>
                        <p class="card-text">
                                        
                        </p>
                        <a href="${productosEnArray.id}" id="botonVerProducto${indice}" class="card-footer btn btn-danger bg-red">
                            Ver producto
                        </a> 
                    </div>
                </div>
            </div>
            `

        }
    });
})