const productos = [
    { nombre: "motherboards", precio: 100000 },
    { nombre: "procesadores", precio: 150000 },
    { nombre: "memoriaRams", precio: 80000 },
    { nombre: "gpu", precio: 300000 },
    { nombre: "fuentes", precio: 80000 },
];

let carrito = []

let inicio = prompt("Bienvenidos a tienda Fluxx, desea comprar algun producto si o no")

while (inicio != "si" && inicio != "no") {
    alert("por favor ingresa si o no")
    inicio = prompt("hola desea comprar algo si o no")
}

if (inicio == "si") {
    alert("Estos son nuestros productos")
    let nuestrosMenu = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$");
    alert(nuestrosMenu.join(" - "))
} else if (inicio == "no") {
    alert("Gracias por su visita, hasta pronto")
}

while (inicio != "no") {
    let producto = prompt("Agrega un producto en tu carro")
    let precio = 0

    if (producto == "motherboars" || producto == "procesadores" || producto == "memoriaRams" || producto == "gpu" || producto == "fuentes") {
        switch (producto) {
            case "motherboars":
                precio = 100000;
                break;
            case "procesadores":
                precio = 150000;
                break
            case "memoriaRams":
                precio = 80000;
                break;
            case "gpu":
                precio = 300000;
                break;
            case "fuentes":
                precio = 80000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuanta cantidad elije"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese producto en nuestra tienda")
    }

    inicio = prompt("desea seguir comprano?")

    while(inicio === "no"){
        alert ("gracias por la compra!")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

const total = carrito.reduce ((acumulador, el) => acumulador + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es: ${total}`);
