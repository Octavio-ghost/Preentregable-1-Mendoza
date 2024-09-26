
function guardarDatos() {
    const material = document.getElementById('material').value;
    const pesoFilamento = document.getElementById('pesoFilamento').value;
    const tiempoImpresion = document.getElementById('tiempoImpresion').value;
    const consumoEnergia = document.getElementById('consumoEnergia').value;
    const tarifaEnergia = document.getElementById('tarifaEnergia').value;
    const costoDesgaste = document.getElementById('costoDesgaste').value;


    // Guardar los valores en localStorage
    localStorage.setItem('material', material);
    localStorage.setItem('pesoFilamento', pesoFilamento);
    localStorage.setItem('tiempoImpresion', tiempoImpresion);
    localStorage.setItem('consumoEnergia', consumoEnergia);
    localStorage.setItem('tarifaEnergia', tarifaEnergia);
    localStorage.setItem('costoDesgaste', costoDesgaste);

    

}

function cargarDatos() {
    // Cargar los valores desde localStorage
    document.getElementById('pesoFilamento').value = localStorage.getItem('pesoFilamento') || '';
    document.getElementById('tiempoImpresion').value = localStorage.getItem('tiempoImpresion') || '';
    document.getElementById('consumoEnergia').value = localStorage.getItem('consumoEnergia') || '';
    document.getElementById('tarifaEnergia').value = localStorage.getItem('tarifaEnergia') || '';
    document.getElementById('costoDesgaste').value = localStorage.getItem('costoDesgaste') || '';

    
}

