function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio1(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    limpiarResultado();
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let mensaje = "";
    if (nota < 75) {
        mensaje = "Usted Necesita Mejorar";
    } else if (nota < 80) {
        mensaje = "Bueno";
    } else if (nota < 91) {
        mensaje = "Muy Bueno";
    } else if (nota <= 100) {
        mensaje = "Usted está en Excelencia Académica";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio2(event) {
    event.preventDefault();
    limpiarResultado();
    let base = parseFloat(prompt("ingrese la base "))
    let altura = parseFloat(prompt("ingrese la altura "))
    let area = (base * altura) / 2;
    let mensaje = "El área del triángulo es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio3(event) {
    event.preventDefault();
    limpiarResultado();
    let nota1 = parseFloat(prompt("ingrese su nota del primer parcial"))
    let nota2 = parseFloat(prompt("ingrese su nota del segundo parcial"))
    let nota3 = parseFloat(prompt("ingrese su nota del tercer parcial"))
    let nota4 = parseFloat(prompt("ingrese su nota del cuarto parcial"))
    let promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    let mensaje = "El promedio de las 4 notas es de: " + promedio;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio4(event) {
    event.preventDefault();
    limpiarResultado();
    let precio = parseFloat(prompt("Ingrese el precio del ticket"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento"));
    let mensaje = "";

    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        mensaje = "Ya que usted tiene menos de 12 obtiene un descuento del 40%, por lo tanto solo debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let canti = precio * 0.30;
            let des = precio - canti;
            mensaje = "Ya que usted tiene más de 13 y menos de 21 y es estudiante, obtiene un descuento del 30%, por lo tanto solo debe pagar " + des + "$";
        } else {
            mensaje = "Lo siento, pero usted no es estudiante, por lo tanto no puede obtener este descuento. Debe pagar el precio normal que es de " + precio + "$";
        }
    } else if (edad >= 60) {
        let cantid = precio * 0.60;
        let descu = precio - cantid;
        mensaje = "Ya que usted tiene más de 60, obtiene un descuento del 60%, por lo tanto solo debe pagar " + descu + "$";
    } else {
        mensaje = "Si usted no tiene menos de 21 o más de 60, no obtiene ningún descuento, por lo tanto debe pagar el ticket completo que sería " + precio + "$";
    }

    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio5(event) {
    event.preventDefault();
    limpiarResultado();
    let lado1 = parseFloat(prompt("ingrese el primer lado"));
    let lado2 = parseFloat(prompt("ingrese el segundo lado"));
    let area = lado1 * lado2;
    let mensaje = "El área del cuadrado es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio6(event) {
    event.preventDefault();
    limpiarResultado();
    let base = parseFloat(prompt("ingrese la base"));
    let altura = parseFloat(prompt("ingrese la altura"));
    let perimetro = 2 * (base + altura);
    let mensaje = "El perímetro del rectángulo es: " + perimetro;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio7(event) {
    event.preventDefault();
    limpiarResultado();
    let edad = parseFloat(prompt("Ingrese su edad"));
    let mensaje = "";
    if (edad >= 18) {
        mensaje = "Usted es mayor de edad";
    } else if (edad <= 17) {
        mensaje = "Usted es menor de edad";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio8(event) {
    event.preventDefault();
    limpiarResultado();
    let nombre = prompt("Ingrese su nombre");
    let asistencia = parseFloat(prompt("Ingrese su cantidad de asistencias"));
    let mensaje = "";
    if (asistencia >= 35) {
        mensaje = nombre + " usted es un estudiante de categoría A";
    } else if (asistencia > 21 && asistencia < 35) {
        mensaje = nombre + " usted es un estudiante de categoría B";
    } else if (asistencia >= 0 && asistencia < 21) {
        mensaje = nombre + " usted es un estudiante de categoría C";
    } else {
        mensaje = "Unidad no válida";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio9(event) {
    event.preventDefault();
    limpiarResultado();
    let basemayor = prompt("ingrese basemayor");
    let basemenor = parseFloat(prompt("ingrese basemenor"));
    let altura = parseFloat(prompt("ingrese altura"));
    let area = ((basemayor + basemenor) * altura) / 2;
    let mensaje = "El área del trapecio es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio10(event) {
    event.preventDefault();
    limpiarResultado();
    const tasaCambio = 24;
    const dolares = parseFloat(prompt("ingrese su cantiadad de dolares"));
    const convertir = dolares * tasaCambio;
    const mensaje = dolares + " dólares son " + convertir + " lempiras";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio11(event) {
    event.preventDefault();
    limpiarResultado();
    let lempiras = parseFloat(prompt("ingrese la cantidad de lempiras que quiere a dolares"));
    let tasaCambio = 24;
    let convertir = lempiras / tasaCambio;
    let mensaje = lempiras + " lempiras son " + convertir.toFixed(2) + " dólares";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio12(event) {
    event.preventDefault();
    limpiarResultado();
    let C = parseFloat(prompt("ingrese la cantidad de celsius que quiere convertir"));
    let F = (C * 9/5) + 32;
    let mensaje = C + " grados Celsius son " + F + " grados Fahrenheit";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio13(event) {
    event.preventDefault();
    limpiarResultado();
    let radio = parseFloat(prompt("Ingrese la radio para encontrar el area"));
    let area = Math.PI * (radio * radio);
    let mensaje = "El área de un círculo con un radio de " + radio + " es igual a " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio14(event) {
    event.preventDefault();
    limpiarResultado();
    let radio = parseFloat(prompt("ingrese la radio"));
    let perimetro = 2 * Math.PI * radio;
    const mensaje = "El perímetro de un círculo con un radio de " + radio + " es de: " + perimetro;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio15(event) {
    event.preventDefault();
    limpiarResultado();
    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
    let unidad = prompt("Ingrese la unidad que desea convertir (m para metros, cm para centímetros)");
    let mensaje = "";
    if (unidad === "m") {
        let cm = cantidad * 100;
        mensaje = `${cantidad} metros equivalen a ${cm} centímetros`;
    } else if (unidad === "cm") {
        let m = cantidad / 100;
        mensaje = `${cantidad} centímetros equivalen a ${m} metros`;
    } else {
        mensaje = "Unidad de medida no válida";
    }
    document.getElementById("resultado").textContent = mensaje;
}