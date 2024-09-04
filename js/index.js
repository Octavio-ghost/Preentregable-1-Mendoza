
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciales de ejemplo (en un caso real, estas se verificarían en un servidor)
    const correctUsername = "octavio5" ;
    const correctPassword = "1234" ;

    // Validar credenciales
    if (username === correctUsername && password === correctPassword) {
        document.getElementById('message').innerText = "Inicio de sesión exitoso!";
        // Aquí podrías redirigir al usuario a una página protegida o hacer otra acción
    } else {
        document.getElementById('message').innerText = "Nombre de usuario o contraseña incorrectos.";
    }
});








function calculateCost() {
    // Obtener los valores de los campos de entrada
    const costFilament = parseFloat(document.getElementById('costFilament').value);
    const weightModel = parseFloat(document.getElementById('weightModel').value);
    const timePrint = parseFloat(document.getElementById('timePrint').value);
    const costPerHour = parseFloat(document.getElementById('costPerHour').value);
    const additionalCosts = parseFloat(document.getElementById('additionalCost').value);

    // Verificar si todos los campos tienen valores válidos
    if (isNaN(costFilament) || isNaN(weightModel) || isNaN(timePrint) || isNaN(costPerHour) || isNaN(additionalCosts)) {
        document.getElementById('result').innerText = "Por favor, completa todos los campos con valores válidos.";
        return;
    }

    // Calcular el costo del filamento
    const costFilamentPerGram = costFilament / 1000;
    const filamentCost = costFilamentPerGram * weightModel;

    // Calcular el costo de impresión por tiempo
    const timeCost = timePrint * costPerHour;

    // Calcular el costo total
    const totalCost = filamentCost + timeCost + additionalCosts;

    // Mostrar el resultado
    document.getElementById('result').innerText = `Costo total de impresión: $${totalCost.toFixed(2)}`;
}


