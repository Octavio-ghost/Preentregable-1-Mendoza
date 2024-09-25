document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal1');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');


    function openmodal(Bdmateriales) {
        modalTitle.textContent = Bdmateriales.material;
        modalContent.textContent = Bdmateriales.Precio;
        modal.style.display = 'flex'
    }



    function cargarJSON(id) {
        fetch('../json/BdMateriales.json')
            .then(response => response.json())
            .then(data => {
                const item = data.find(entry => entry.id === id);
                openmodal(item)
            })

    }
    document.getElementById('material1').addEventListener('click', () => {
        cargarJSON(1);
    });
    document.getElementById('material2').addEventListener('click', () => {
        cargarJSON(2);
    });
    document.getElementById('material3').addEventListener('click', () => {
        cargarJSON(3);
    });
    document.getElementById('material4').addEventListener('click', () => {
        cargarJSON(4);
    });
    document.getElementById('material5').addEventListener('click', () => {
        cargarJSON(5);
    });


    closeModal.addEventListener('click', () => { modal.style.display = 'none'; })

})

function calculateCost() {
    const precioFilamento=document.getElementById('modalContent')
    const tiempoImpersion = parseFloat(document.getElementById('tiempoImpersion').value);
    const pesoFilamento = parseFloat(document.getElementById('pesoFilamento').value);
    const consumoEnergia = parseFloat(document.getElementById('consumoEnergia').value);
    const tarifaEnergia = parseFloat(document.getElementById('tarifaEnergia').value);
    const costoDesgaste = parseFloat(document.getElementById('costoDesgaste').value);



    // Calcular el costo del filamento
    const costoFilamento = (pesoFilamento / 1000) * precioFilamento;


    //calcular costo de energia
    const costoEnergia = consumoEnergia * tiempoImpersion * tarifaEnergia;


    //Calcular costo de desgaste
    const costoTotalDesgaste = costoDesgaste * tiempoImpersion;

    //Costo total
    const costoTotal = (costoFilamento + costoEnergia + costoTotalDesgaste).toFixed(2);

    //Mostrar resultado

    document.getElementById('resultado').innerHTML = `Costo Total:$${costoTotal}`

    //Evento para calcular

    document.getElementById('calcular').addEventListener('click', () => calculateCost);


}


function guardarDatos() {
    const pesoFilamento = document.getElementById('pesoFilamento').value;
    const tiempoImpresion = document.getElementById('tiempoImpresion').value;
    const consumoEnergia = document.getElementById('consumoEnergia').value;
    const tarifaEnergia = document.getElementById('tarifaEnergia').value;
    const costoDesgaste = document.getElementById('costoDesgaste').value;

    // Guardar los valores en localStorage
    localStorage.setItem('pesoFilamento', pesoFilamento);
    localStorage.setItem('tiempoImpresion', tiempoImpresion);
    localStorage.setItem('consumoEnergia', consumoEnergia);
    localStorage.setItem('tarifaEnergia', tarifaEnergia);
    localStorage.setItem('costoDesgaste', costoDesgaste);

    alert("Datos guardados en localStorage.");
}

function cargarDatos() {
    // Cargar los valores desde localStorage
    document.getElementById('pesoFilamento').value = localStorage.getItem('pesoFilamento') || '';
    document.getElementById('tiempoImpresion').value = localStorage.getItem('tiempoImpresion') || '';
    document.getElementById('consumoEnergia').value = localStorage.getItem('consumoEnergia') || '';
    document.getElementById('tarifaEnergia').value = localStorage.getItem('tarifaEnergia') || '';
    document.getElementById('costoDesgaste').value = localStorage.getItem('costoDesgaste') || '';

    alert("Datos cargados desde localStorage.");
}