/*fetch('..json/clases.json')

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
});
*/


//Slide de marcas en index

var shower = $('.shower');
var seats = $('.shower-seat');

var next = function(el) {
  if (el.next().length > 0) {
    return el.next();
  } else {
    return seats.first();
  }
};

var progress = function(e) {
    var el = $('.is-ref').removeClass('is-ref');
    var new_seat = next(el);

    new_seat.addClass('is-ref').css('order', 1);
    for (var i = 2, ref = seats.length; i <= ref; i++) {
        new_seat = next(new_seat).css('order', i);
        console.log(new_seat);
    }

    shower.removeClass('is-set');

    return setTimeout((function() {
        return shower.addClass('is-set');
    }), 50);
};

window.setInterval(function(){
  progress();
}, 2000);

