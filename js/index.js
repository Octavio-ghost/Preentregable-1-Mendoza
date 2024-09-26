// Cargar el archivo JSON con los precios de los materiales
async function cargarPrecios() {
  const response = await fetch('../json/BdMateriales.json');
  const data = await response.json();

  const selectMaterial = document.getElementById('material');

  // Llenar el select con los materiales del JSON
  data.materiales.forEach(material => {
    const option = document.createElement('option');
    option.value = material.BdMateriales;
    option.textContent = `${material.nombre} - $${material.precio} por kg`;
    selectMaterial.appendChild(option);
  });
}

function calcularCosto() {
  const precioFilamento = parseFloat(document.getElementById('material').value);
  const pesoFilamento = parseFloat(document.getElementById('pesoFilamento').value);
  const tiempoImpresion = parseFloat(document.getElementById('tiempoImpresion').value);
  const consumoEnergia = parseFloat(document.getElementById('consumoEnergia').value);
  const tarifaEnergia = parseFloat(document.getElementById('tarifaEnergia').value);
  const costoDesgaste = parseFloat(document.getElementById('costoDesgaste').value);


  // Calcular el costo del filamento
  const costoFilamento = (pesoFilamento / 1000) * precioFilamento;

  // Calcular el costo de energía
  const costoEnergia = consumoEnergia * tiempoImpresion * tarifaEnergia;

  // Calcular el costo de desgaste
  const costoTotalDesgaste = costoDesgaste * tiempoImpresion;

  // Sumar todos los costos
  const costoTotal = (costoFilamento + costoEnergia + costoTotalDesgaste).toFixed(2);

  // Mostrar el resultado
  document.getElementById('resultado').innerHTML = `Costo Total: $${costoTotal}`;
}

window.addEventListener('click', cargarPrecios(), { once: true })
document.getElementById('calcular').addEventListener('click', calcularCosto)
