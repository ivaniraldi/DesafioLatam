        // Función para realizar operaciones con dos números
        function realizarOperaciones() {
            // Obtener los valores de los números ingresados por el usuario y convertirlos a números de punto flotante
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);

            // Verificar si los números son válidos (mayores a cero)
            if (num1 <= 0 || num2 <= 0) {
                alert("Error: Los números deben ser mayores a cero.");
                return; // Salir de la función si hay un error
            }

            // Realizar las operaciones matemáticas
            var suma = num1 + num2;
            var resta = num1 - num2;
            var division = num1 / num2;
            var multiplicacion = num1 * num2;
            var modulo = num1 % num2;

            // Actualizar los elementos HTML con los resultados de las operaciones
            document.getElementById("suma").textContent = "Suma: " + suma;
            document.getElementById("resta").textContent = "Resta: " + resta;
            document.getElementById("division").textContent = "División: " + division;
            document.getElementById("multiplicacion").textContent = "Multiplicación: " + multiplicacion;
            document.getElementById("modulo").textContent = "Módulo: " + modulo;
        }