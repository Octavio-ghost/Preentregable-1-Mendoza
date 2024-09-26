


function cargarResultado() {
    const resultadoGuardado = localStorage.getItem('resultado');
    if (resultadoGuardado) {
        Swal.fire(`Resultado anterior $${resultadoGuardado}`);
    }
}


document.getElementById('verGuardados').addEventListener('click', cargarResultado)