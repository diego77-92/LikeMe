
var buttons = document.querySelectorAll("#btn");

buttons.forEach(function(button) {
    var isLiked = false; // Variable pour garder une trace de l'état actuel de l'image

    button.addEventListener("click", function() {
        button.classList.toggle("blue"); // Basculer la classe "blue" sur le bouton cliqué
        
        // Sélectionner l'image précédant le bouton
        var img = button.previousElementSibling;

        // Vérifier l'état actuel de l'image
        if (isLiked) {
            // Si l'image est déjà "likée", la changer en "non likée"
            img.src = "img/miniature_unlike.png";
            isLiked = false; // Mettre à jour l'état de la variable
        } else {
            // Sinon, changer l'image en "likée"
            img.src = "img/miniature_like.png";
            isLiked = true; // Mettre à jour l'état de la variable
        }
    });
});




