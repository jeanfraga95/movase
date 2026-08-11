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


// $(document).ready(function(){
//     $('#destaque').slick(
//         {
//             dots:true,
//             autoplay:true,
//             autoplaySpeed:3000,
//             arrows:false
//         }
//     );
// })


let modal = document.querySelector(".modal-container");
let btn_fotos = document.querySelector("#pac-fotos2");
let valor_modal = true;

btn_fotos.addEventListener("click", function(){

    if(valor_modal){
    modal.style.display = "flex";
        valor_modal = false;

    }
    else{
        modal.style.display = "none";
        valor_modal = true;

    }
    
   

});