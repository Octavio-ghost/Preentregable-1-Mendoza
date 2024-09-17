

class Impresion3DCalculadora {
    constructor(formId, timeId, weightId, costPerHourId, materialCostId, resultId) {
      this.form = document.getElementById(formId);
      this.timeInput = document.getElementById(timeId);
      this.weightInput = document.getElementById(weightId);
      this.costPerHourInput = document.getElementById(costPerHourId);
      this.materialCostInput = document.getElementById(materialCostId);
      this.resultDisplay = document.getElementById(resultId);
  
      // Cargar los datos almacenados si existen
      this.loadStoredData();
  
      // Inicializar el evento de envío del formulario
      this.init();
    }
  
    init() {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.calculateCost();
        this.storeData();
      });
    }
  
    calculateCost() {
      const time = parseFloat(this.timeInput.value) || 0;
      const weight = parseFloat(this.weightInput.value) || 0;
      const costPerHour = parseFloat(this.costPerHourInput.value) || 0;
      const materialCost = parseFloat(this.materialCostInput.value) || 0;
  
      const totalCost = (time * costPerHour) + (weight * materialCost);
  
      this.resultDisplay.textContent = `Costo total: $${totalCost.toFixed(2)}`;
    }
  
    storeData() {
      // Guardar los datos en localStorage
      localStorage.setItem('3dPrintTime', this.timeInput.value);
      localStorage.setItem('3dPrintWeight', this.weightInput.value);
      localStorage.setItem('3dPrintCostPerHour', this.costPerHourInput.value);
      localStorage.setItem('3dPrintMaterialCost', this.materialCostInput.value);
    }
  
    loadStoredData() {
      // Cargar datos desde localStorage (si existen)
      if (localStorage.getItem('3dPrintTime')) {
        this.timeInput.value = localStorage.getItem('3dPrintTime');
      }
  
      if (localStorage.getItem('3dPrintWeight')) {
        this.weightInput.value = localStorage.getItem('3dPrintWeight');
      }
  
      if (localStorage.getItem('3dPrintCostPerHour')) {
        this.costPerHourInput.value = localStorage.getItem('3dPrintCostPerHour');
      }
  
      if (localStorage.getItem('3dPrintMaterialCost')) {
        this.materialCostInput.value = localStorage.getItem('3dPrintMaterialCost');
      }
    }
  }
  
  // Crear una instancia de la calculadora
  const calculadora = new Impresion3DCalculadora(
    'calculatorForm',
    'time',
    'weight',
    'costPerHour',
    'materialCost',
    'totalCost'
  );
  


