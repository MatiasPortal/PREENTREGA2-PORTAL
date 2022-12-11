//PRE ENTREGA 1


/* let ropa = prompt(`Eliga su producto:
1: Remera
2: Campera
3: Jean
4: Pantalon`)

let remera = 5000
let campera = 10000
let jean = 12000
let pantalon = 8000

let miMonto = 9000
let montoTarjeta = true;



switch(ropa){
    case "1":
        alert(`Usted selecciono "REMERA"`);
        alert(remera);
        if (miMonto >= remera) {
            alert("Puedes comprar la remera con efectivo");
        } else if (montoTarjeta){
            alert("Puedes pagar con tarjeta");
        } else {
            alert("No puedes realizar la compra");
        }
        
        break;
    case "2":
        alert(`Usted selecciono "CAMPERA"`);
        alert(campera);
        if (miMonto >= campera) {
            alert("Puedes comprar la campera con efectivo");
        } else if (montoTarjeta){
            alert("Puedes pagar con tarjeta");
        } else {
            alert("No puedes realizar la compra");
        }
        break;
    case "3":
        alert(`Usted selecciono "JEAN"`);
        alert(jean);
        if (miMonto >= jean) {
            alert("Puedes comprar el jean con efectivo");
        } else if (montoTarjeta){
            alert("Puedes pagar con tarjeta");
        } else {
            alert("No puedes realizar la compra");
        }
        break;
    case "4":
        alert(`Usted selecciono "PANTALON"`);
        alert(pantalon);
        if (miMonto >= pantalon) {
            alert("Puedes comprar el pantalon con efectivo");
        } else if (montoTarjeta){
            alert("Puedes pagar con tarjeta");
        } else {
            alert("No puedes realizar la compra");
        }
        break;
    default:
        alert("Usted no ha seleccionado ninguna prenda.")
}



function descuento(precio) {
    precio = prompt('Ingrese el monto total de la prenda para realizar 10% de descuento: ');
    let desc = precio * 0.1;

    let total = precio - desc;
    return total;
}

alert(descuento())



for (let i = 0; i <= 5; i++) {
    if(i === 1){
        alert("La prenda se encuentra disponible en talle XS");
    }
    else if(i === 2){
        alert("La prenda se encuentra disponible en talle S");
    }
    else if(i === 3){
        alert("La prenda se encuentra disponible en talle M");
    }
    else if(i === 4){
        alert("La prenda se encuentra disponible en talle L");
    }
    else if(i === 5) {
        alert("La prenda no tiene mas talles");
    }
}

function talle(talles) {
    talles = prompt(`Eliga su talle:
    XS
    S
    M
    L
    Colocar en Mayus.`)

    switch(talles){
        case "XS":
            alert("Usted selecciono talle XS");
            break;
        case "S":
            alert("Usted selecciono talle S");
            break;
        case "M":
            alert("Usted selecciono talle M");
            break;
        case "L":
            alert("Usted selecciono talle L");
            break;
        default:
            alert("Usted no selecciono ninguna prenda.")
    }
}

alert(talle());
*/






//PRE ENTREGA 2



class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.stock = stock;
    }
    descuento() {
        this.precio = this.precio * 1.10;
        console.log("Descuento aplicado del 10%")
    }
}

let producto1 = new Producto("remera", "6000", true);
let producto2 = new Producto("campera", "9000", true);
let producto3 = new Producto("jean", "11000", false);

producto1.descuento()
console.log(producto1)





let productos = [
    {
        nombre: "remera", 
        precio: 5000, 
        id: 1,
        disponible: true
    },
    {
        nombre: "campera", 
        precio: 9000, 
        id: 2,
        disponible: true
    },
    {
        nombre: "jean",
        precio: 11000,
        id: 3,
        disponible: true
    },
    {
        nombre: "bermuda",
        precio: 7000,
        id: 4,
        disponible: false
    }
]


let enStock = productos.filter((d)=> d.disponible === true)
console.log("Productos en stock:")
console.log(enStock)



const miCarrito = [productos[0]];

const agregar = (nombre) =>{
    let push = miCarrito.push(nombre)
}

agregar(productos[2])

let total = miCarrito.reduce((accum, p)=>{
    return accum + p.precio;
}, 0);

console.log(miCarrito)
console.log(`Su total es ${total}`)








