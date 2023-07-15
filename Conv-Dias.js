
// Función para convertir una cantidad de días a años, semanas y días
function convertirDias() {
    // Obtener el valor de días ingresado por el usuario y convertirlo a un número entero
    var dias = parseInt(document.getElementById("dias").value);

    //Este condicional contempla el año bisiesto
    if(dias>=1460){dias = dias - 1}

    // Calcular la cantidad de años
    var anios = Math.floor(dias / 365);

    // Calcular la cantidad de semanas
    var semanas = Math.floor((dias % 365) / 7);

    // Calcular la cantidad de días restantes
    var diasRestantes = (dias % 365) % 7;

    // Actualizar el elemento 'anios' con la cantidad de años calculada
    document.getElementById("anios").textContent = "Años: " + anios;

    // Actualizar el elemento 'semanas' con la cantidad de semanas calculada
    document.getElementById("semanas").textContent = "Semanas: " + semanas;

    // Actualizar el elemento 'diasRestantes' con la cantidad de días restantes calculada
    document.getElementById("diasRestantes").textContent = "Días: " + diasRestantes;
}