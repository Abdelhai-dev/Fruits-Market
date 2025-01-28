// pour que quand j'appuie sur + ou - 
    document.getElementById('increment').addEventListener('click', function() {
        let input = document.getElementById('numberInput');
        input.value = parseInt(input.value) + 1;
    });

    document.getElementById('decrement').addEventListener('click', function() {
        let input = document.getElementById('numberInput');
        input.value = parseInt(input.value) - 1;
    });
// Dark mode
let all = document.querySelectorAll("*")
let boutton = document.querySelector(".Dark-Mode")

boutton.addEventListener("click", function() {
      all.forEach(element => {
        element.classList.toggle("dark-mode")
    });
})
// like rouge

    document.querySelectorAll('.myButton').forEach(function(e) {
        e.addEventListener("click" , function() {
            this.classList.toggle("clicked-red")
        })
    })
// modal

    // Ouvrir le modal
    document.getElementById('openModalButton').addEventListener('click', function() {
        var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
        myModal.show();
    });

    // Fermer le modal
    document.getElementById('closeModalButton').addEventListener('click', function() {
        var myModalEl = document.getElementById('loginModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    });

