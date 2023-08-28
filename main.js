"use strict"
// on veut que tu recupére nos deonners
list.innerHTML = localStorage.getItem("stock");

// on recuoére tous ce qui est dans  notre class delete
const spanDels = document.querySelectorAll(".delete");

// ici on va bouclé sue notre fuction del


for (let span of spanDels) {
   // ajoute l'evenement del
   span.onclick = () => del(span.parentElement)

};
// // met a jour notre code

// if(list.innerHTML == "")
//    {
//       nosTache.style.display = "block"
//    }
nosTache.style.display = (list.innerHTML == "") ? "block" : "none";

form.onsubmit = () => {
   const myElement = document.createElement("li");
   const button1 = document.createElement("button")
   const button2 = document.createElement("button")
   const button3 = document.createElement("button")
   const mySpan = document.createElement("button");

   //  Ajouter une  class
   mySpan.classList.add("delete")
   
   button1.textContent = "to do";
   button2.textContent = "doing";
   button3.textContent = "Done";
   mySpan.textContent = "Suprimer";
   mySpan.onclick = () => del(myElement);
   button1.onclick = () => color(myElement);
   button2.onclick = () => color2(myElement);
   button3.onclick = () => color3(myElement);
   myElement.innerHTML = myinput.value;
    
   // styliser mes buttons
   button1.style.marginLeft = "60%";
   button1.style.background = "red"
   button1.style.paddingLeft = "13px";
   button1.style.paddingRight = "13px";
   
   button2.style.paddingLeft = "13px";
   button2.style.paddingRight = "13px";
   button2.style.background = "orange"
   
   button3.style.paddingLeft = "13px";
   button3.style.paddingRight = "13px";
   button3.style.background = "green"
   

   
   
   myElement.appendChild(button1)
   myElement.appendChild(button2)
   myElement.appendChild(button3)
   myElement.appendChild(mySpan);
   list.appendChild(myElement);
   myinput.value = "";

   nosTache.style.display = "none";

   //  stoker nos doner
   localStorage.setItem("stock", list.innerHTML)

   return false;

}

function del(element) {
   element.remove();

   // if(list.innerHTML == "")
   // {
   //    nosTache.style.display = "block"
   // }
   nosTache.style.display = (list.innerHTML == "") ? "block" : "none";

   // enregistre la nouvelle list
   localStorage.setItem("stock", list.innerHTML)
}


function color(elements) {
   elements.style.background = "red";
}

function color2(elements2) {
   elements2.style.background = "orange";
}

function color3(elements3) {
   elements3.style.background = "green";
}