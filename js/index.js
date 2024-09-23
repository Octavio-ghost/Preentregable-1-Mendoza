document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal1');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.querySelector('#modalImg');
    const modalContent = document.getElementById('modalContent');


    function openmodal(Bdmateriales) {
        modalTitle.textContent = Bdmateriales.material;
       modalImg.textContent=Bdmateriales.url;
        modalContent.textContent = Bdmateriales.Precio;
        modal.style.display = 'flex'
    }



    function cargarJSON(id) {
        fetch('../.json/BdMateriales.json')
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


    closeModal.addEventListener('click', () => {modal.style.display= 'none';})

})