// let itens = document.getElementById("itens");
// let iconMenu = document.getElementById("iconMenu");

// itens.style.display = "none";

// iconMenu.addEventListener("click", function(event) {
//     event.stopPropagation(); 
//     if (itens.style.display === "none") {
//         itens.style.display = "block";
//     } else {
//         itens.style.display = "none";
//     }
// });


// document.addEventListener("click", function() {
//     if (itens.style.display === "block") {
//         itens.style.display = "none";
//     }
// });


// itens.addEventListener("click", function(event) {
//     event.stopPropagation();
// });


$(document).ready(function(){
    $('#destaque').slick(
        {
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:false
        }
    );
})