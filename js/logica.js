/*Por medio de fetch y promesas creo la estructura para cada uno
de los productos que se mostraran en la pagina Productos, con sus respectivas
caracteristicas*/
fetch('../json/productos.json')
.then(promesa => promesa.json())
.then(data => {
    data.forEach((productosEnArray, indice) => {

        if(divProductos != null ){

            divProductos.innerHTML += `
            <div id="producto${indice} class="col">
                <div class="card h-100">
                    <img src="../assets/img/productos/${productosEnArray.img}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-title">
                            ${productosEnArray.nombre}
                        </p>
                        <p class="card-text text-muted">
                            ${productosEnArray.codigo}        
                        </p>
                        <a href="${productosEnArray.url}" id="botonVerProducto${indice}" class="btn bg-orange text-white rounded">
                            Ver producto
                        </a> 
                    </div>
                </div>
            </div>
            `
        }
    })
    data.forEach((productosEnArray, indice) => {

        let botonVerProducto = document.getElementById(`botonVerProducto${indice}`);

        botonVerProducto?.addEventListener("click", () => {
            window.location.href = `${productosEnArray.url}`;
        })
    })
});

