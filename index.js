const som_button = document.getElementById("som_button");
const somIcone = som_button.querySelector("img"); 

som_button.addEventListener("click", function() {
    
    if (somIcone.src.includes('som_ligado.png')) {
        somIcone.src = 'img/som_mudo.png'; 
    } else {
        somIcone.src = 'img/som_ligado.png'; 
    }
});

