        //creamos una clase que haga las operaciones
        // Definición de la clase OperacionesMatematicas
class OperacionesMatematicas {
    constructor() {
        // Propiedad para almacenar los números ingresados
        this.numeros = [];
    }

    // Método para obtener los números ingresados por el usuario
    obtenerNumeros() {
        for (let i = 1; i <= 5; i++) {
            let inputId = "num" + i;
            // Obtener el valor numérico del elemento de entrada
            let num = parseFloat(document.getElementById(inputId).value);
            // Almacenar el número en el arreglo 'numeros'
            this.numeros.push(num);
        }
    }

    // Método para calcular la suma de los números
    calcularSuma() {
        // Utilizar el método reduce para sumar todos los elementos del arreglo 'numeros'
        return this.numeros.reduce((acc, curr) => acc + curr, 0);
    }

    // Método para calcular el promedio de los números
    calcularPromedio() {
        // Calcular la suma de los números utilizando el método calcularSuma()
        let suma = this.calcularSuma();
        // Calcular el promedio dividiendo la suma entre la cantidad de números ingresados
        return suma / this.numeros.length;
    }

    // Método para mostrar los resultados en el HTML
    mostrarResultados() {
        // Actualizar el contenido del elemento 'suma' con la suma de los números
        document.getElementById("suma").textContent = "Suma de los números: " + this.calcularSuma();
        // Actualizar el contenido del elemento 'promedio' con el promedio de los números
        document.getElementById("promedio").textContent = "Promedio de los números: " + this.calcularPromedio();
    }
}

// Función para realizar las operaciones
function realizarOperaciones() {
    // Crear una instancia de la clase OperacionesMatematicas
    const operaciones = new OperacionesMatematicas();
    // Obtener los números ingresados llamando al método obtenerNumeros()
    operaciones.obtenerNumeros();
    // Mostrar los resultados llamando al método mostrarResultados()
    operaciones.mostrarResultados();
}