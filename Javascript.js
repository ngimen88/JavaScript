users = "admin"
clave = 1234

for (i = 2; i >= 0; i--) {
    login = prompt("POR FAVOR INGRESE USUARIO :")
    pass = prompt("POR FAVOR INGRESE SU PASSWORD :")
    if (!login || !pass) {
        alert("INGRESE LOS DATOS SOLICITADOS")
        break
    }
    else {
        if (login == users && pass == clave) {
            alert("BIENVENIDO AL SISTEMA")
        }
        else {
            alert(`USUARIO INCORRECTO, LE QUEDA ${i}`)

        }
    }
}

const IVA = function(precio){return precio *0.21}
let precioProducto = Number(prompt("Ingrese precio" ));
let precioTotal = IVA (precioProducto)+precioProducto;
alert (`SU TOTAL ES : ${precioTotal}`);