function precio_a_pagar(precio, usuario) {
    if(usuario == "Cliente" || usuario == "cliente") {
        let precio_cliente = precio * 0.10;
        return precio_cliente;
    }
    else if (usuario == "No cliente" || usuario == "No cliente") {
        let precio_no_cliente = precio * 0.15;
        return precio_no_cliente;
    
}

}

class producto {
    constructor(nombre , precio , stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

get_datos(){
    console.log("=============");
    console.log ("Nombre: ", this.nombre);
    console.log ("Precio: ", this.precio);
    console.log ("Stock: ", this.stock);
    console.log("");
}

get_stock(){
    if( this.stock <= 0 ){
        return false
    }
else{
    return true
    }
}

    venta_stock(cantidad){

    if( this.stock >= cantidad){
        
        this.stock = this.stock - cantidad;
        return true
    }
    else{
        return false
    }

}
}



let lista_productos = [];

lista_productos.push( new producto("Pestañas Volumen Clasicas" , 2800 , 3));
lista_productos.push( new producto("Pestañas Volumen Medio" , 3700 , 3));
lista_productos.push( new producto("Pestañas Volumen Ruso" , 4000 , 2));
lista_productos.push( new producto("Pestañas Mega Volumen" , 4500 , 2));
lista_productos.push( new producto("Remocion" , 600 , 10));
lista_productos.push( new producto("Color" , 200 , 5));
lista_productos.push( new producto("Strass" , 200 , 20));

console.log ("Lista de productos");
for (let producto of lista_productos) {
    producto.get_datos();
}
let usuario = prompt ( "Ingresar si es Cliente o No. Tenes descuento por ser Cliente");

while (
    usuario!= "Cliente" && 
    usuario!= "cliente" &&
    usuario!= "No cliente" &&
    usuario!= "no cliente"
){
    alert("Ingrese Cliente o no Cliente!");
    usuario = prompt ( "Ingresar si es Cliente o No cliente. Tenes descuento por ser Cliente");
    


function buscar_producto(producto){
    return producto.nombre === compra_usuario
}

let compra_usuario = prompt ("Ingrese el nombre del servicio que  quiere comprar");

let resultado_busqueda = lista_productos.find (buscar_producto);

if (resultado_busqueda != undefined) {

if ( resultado_busqueda.get_stock()){

    let unidades = prompt ("¿Cuantos servicios queres?");
    if(resultado_busqueda.venta_stock( unidades )){
        console.log(`Gracias por comprar ${unidades}  servicios de ${resultado_busqueda.nombre}`);
    }
    else{
        console.log("No se puede realizar esta compra :(");
        console.log("Stock disponible: " , resultado_busqueda.stock);
    }
}
else {
    console.log("No tenemos stock :(", resultado_busqueda.nombre);
}

resultado_busqueda.get_datos();
}

else {
    console.log("No se encontro el productoo", compra_usuario);
}

}


let precio_a_pagar_clasicas = precio_a_pagar (lista_productos[0] .precio ,usuario);
let precio_a_pagar_medio = precio_a_pagar (lista_productos[1] .precio ,usuario);
let precio_a_pagar_ruso = precio_a_pagar (lista_productos[2].precio,usuario);
let precio_a_pagar_mega = precio_a_pagar (lista_productos[3].precio,usuario);
let precio_a_pagar_remocion = precio_a_pagar (lista_productos[4].precio,usuario);
let precio_a_pagar_color = precio_a_pagar (lista_productos[5].precio,usuario);
let precio_a_pagar_strass = precio_a_pagar (lista_productos[6].precio,usuario);



if(lista_productos[0]  > 0){
    alert("compraste " + lista_productos[0]) + "y gastaste $" + resultado_busqueda * precio_a_pagar_clasicas
}

if(lista_productos[1]  > 0){
    alert("compraste " + lista_productos[1]) + "y gastaste $" + resultado_busqueda * precio_a_pagar_medio
}
if(lista_productos[2]  > 0){
    alert("compraste " + lista_productos[2]) + "y gastaste $" +resultado_busqueda * precio_a_pagar_ruso
}
if(lista_productos[3]  > 0){
    alert("compraste " + lista_productos[3]) + "y gastaste $" + resultado_busqueda * precio_a_pagar_mega
}
if(lista_productos[4]  > 0){
    alert("compraste " + lista_productos[4]) + "y gastaste $" + resultado_busqueda * precio_a_pagar_remocion
}
if(lista_productos[5]  > 0){
    alert("compraste " + lista_productos[5]) + "y gastaste $" + resultado_busqueda* precio_a_pagar_color
}
if(lista_productos[6]  > 0){
    alert("compraste " + lista_productos[6]) + "y gastaste $" +resultado_busqueda * precio_a_pagar_strass
}

let cantidad_total = 
resultado_busqueda * precio_a_pagar_clasicas +
resultado_busqueda * precio_a_pagar_medio + 
resultado_busqueda * precio_a_pagar_ruso  +
resultado_busqueda  * precio_a_pagar_mega +
resultado_busqueda * precio_a_pagar_remocion +
resultado_busqueda * precio_a_pagar_color +
resultado_busqueda * precio_a_pagar_strass ;

    if (cantidad_total != NaN) {
        alert("Total: $" + cantidad_total);
    }

