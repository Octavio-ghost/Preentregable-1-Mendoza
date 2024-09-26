
function guardarResultado() {
    const resultado = document.getElementById('resultado').value;

    // Guardar los valores en localStorage
    localStorage.setItem('resultado', resultado);

    Swal.fire("Datos Guardados")

};

function cargarResultado() {
    const resultadoGuardado = localStorage.getItem('resultado');
    if (resultadoGuardado) {
        document.getElementById('guardado').innerHTML = `Costo Total: $${resultadoGuardado}`;
    }
}

document.getElementById('guardar').addEventListener('click', guardarResultado);
document.getElementById('verGuardados').addEventListener('click', cargarResultado)