



function mudar(){
    let q =document.querySelectorAll(".rect")


    q[0].style = "order: 0;";
    q[1].style = "order: -1;";
    q[2].style = "order: 1;";

    setTimeout(() => {
        q[0].style = "";
        q[1].style = "";
        q[2].style = "";
    }, 2000);
}
































/*let disco = document.getElementById("disco");
let musica = document.getElementById("musica");
let number = 0;

function music(){
    let music = document.getElementById("musica");
    music.innerHTML += '<audio autoplay loop src="./images/Makita cortando cano de ferro_128k.mp3"></audio>'
}

function rotation(){
    number++
    if(number>360){
        number = 0;
    }
    
    disco.setAttribute("style", `transform:rotate(${number}deg)`)
}

setInterval(() => {
   rotation(); 
   musica.play();
}, 1);

*/