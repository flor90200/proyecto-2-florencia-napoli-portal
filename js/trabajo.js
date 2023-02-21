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

    let lista_productos = buscar_producto(resultado_busqueda.precio* precio_a_pagar);
    console.log(lista_productos.push);
   

  
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
