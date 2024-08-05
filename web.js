let btn =document.getElementById('btn');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let btn1 =document.getElementById('btn-1');
let card1 =document.getElementById('card1');
let card2 =document.getElementById('card2');
let card3 =document.getElementById('card3');
let card4 =document.getElementById('card4');
let card5 =document.getElementById('card5');
let head =document.getElementById('heading');
let para =document.getElementById('para');
let box =document.getElementById('box');
let para2 =document.getElementById('para2');
let head2 =document.getElementById('heading2');
let form =document.getElementById('form');
let para3 =document.getElementById('para3');
let head3 =document.getElementById('heading3');
let box2 =document.getElementById('box2')
let box3 =document.getElementById('box3');
let main =document.getElementById('main');
let mainp =document.getElementById('mainp');


 btn.addEventListener('click' , dark);
 function dark(){
    if(btn.textContent.includes('Dark')){
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        body.style.backgroundColor = "black";
        card1.style.backgroundColor = "black";
        card1.style.color = "white";
        card2.style.backgroundColor = "black";
        card2.style.color = "white";
        card3.style.backgroundColor = "black";
        card3.style.color = "white";
        card4.style.backgroundColor = "black";
        card4.style.color = "white";
        card5.style.backgroundColor = "black";
        card5.style.color = "white";
        head.style.color = "black";
        para.style.color ="black";
        box.style.backgroundColor = "black";
        para2.style.color = "white";
        head2.style.color= "white";
        form.style.color = "white";
        para3.style.color = "black";
        head3.style.color = "black";
        box2.style.backgroundColor = "black";
        box2.style.color = "white";
        box3.style.backgroundColor = "rgba(0, 0, 0, 0.507)"
        box3.style.color = "black";
        main.style.color ="black";
        mainp.style.color ="black";



        

    }
 }   
 btn1.addEventListener('click' , light )
 function light(){
    if(btn1.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        body.style.backgroundColor = "white";
        card1.style.backgroundColor = "white";
        card1.style.color = "black";
        card2.style.backgroundColor = "white";
        card2.style.color = "black";
        card3.style.backgroundColor = "white";
        card3.style.color = "black";
        card4.style.backgroundColor = "white";
        card4.style.color = "black";
        card5.style.backgroundColor = "white";
        card5.style.color = "black";
        head.style.color = "white";
        para.style.color ="white";
        box.style.backgroundColor = "white";
        para2.style.color = "black";
        head2.style.color= "black";
        form.style.color = "black";
        para3.style.color = "white";
        head3.style.color = "white";
        box2.style.backgroundColor = "white";
        box2.style.color = "black";
        box3.style.backgroundColor = "rgba(255, 255, 255, 0.322)";
        box3.style.color = "white";
        main.style.color ="white";
        mainp.style.color ="white";
    }
 }
