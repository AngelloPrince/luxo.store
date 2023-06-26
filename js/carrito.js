//para que carge los recursos antes de funcionar al script
if (document.readyState=='loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    // damos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito)
    }
}

//elimino item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    //actualizamos el total del carrito cuando eliminemos
    actualizarTotalCarrito();
}

//Actualiza el total del carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        //quitamos el simbolo soles y el punto del milesimo
        var precio = parseFloat(precioElemento.innerText.replace('S./','').replace('.',''));
        console.log(precio)
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad)
        total = total + (precio * cantidad);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = total;
}










// LOCAL STORAGE
var carts = document.getElementById("data-cart");

// Verificar si hay datos almacenados en localStorage
if (localStorage.getItem("cartsTime")) {
  carts.currentTime = localStorage.getItem("cartsTime");
}

// Guardar el tiempo actual del audio en localStorage cuando cambia
window.addEventListener("beforeunload", function() {
  localStorage.setItem("cartsTime", carts.currentTime);
});
