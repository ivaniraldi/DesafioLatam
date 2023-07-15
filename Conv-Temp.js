// Función para convertir una temperatura en grados Celsius a Kelvin y Fahrenheit
function convertirTemperatura() {
    // Obtener el valor de temperatura en grados Celsius ingresado por el usuario y convertirlo a un número de punto flotante
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Calcular la temperatura en Kelvin
    var kelvin = celsius + 273.15;

    // Calcular la temperatura en Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Actualizar el elemento 'kelvin' con la temperatura en Kelvin calculada
    document.getElementById("kelvin").textContent = "Temperatura en Kelvin: " + kelvin;

    // Actualizar el elemento 'fahrenheit' con la temperatura en Fahrenheit calculada
    document.getElementById("fahrenheit").textContent = "Temperatura en Fahrenheit: " + fahrenheit;
}
