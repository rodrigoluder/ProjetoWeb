function color_over(id){
    document.getElementById(id).style.background="#665541";
}
function color_out(id){
    document.getElementById(id).style.background="#493D30";
}

function changeColor(li){
    document.getElementById(li).style.backgroundColor="#E6D1AB";
}

function changeColor2(li){
    document.getElementById(li).style.backgroundColor="#D8B370";
}

/*
// Inicializacao de Eventos
function addEventos(){
var ul = document.getElementsByClassName("nav-menu");
for (var i=0; i<ul.length; i++) {
    ul[i].addEventListener("mouseover", changeColor);
    //ul[i].addEventListener("mouseout", changeColor2);
    }
}
window.addEventListener("load", addEventos); */


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
var catalogo = document.querySelector("div.catalogo");
var catalogoHeight = catalogo.style.height

accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener("click", event => {

        const activeItem = document.querySelector(".accordion-item-header.active")
        if (activeItem && activeItem != accordionItemHeaders) {
            activeItem.classList.toggle("active")
            activeItem.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeaders.classList.toggle("active")
        const accordionItemBody = accordionItemHeaders.nextElementSibling;
        if (accordionItemHeaders.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            catalogo.style.height = 1200 + accordionItemBody.scrollHeight + "px";

        } else {
            accordionItemBody.style.maxHeight = 0;
            catalogo.style.height = catalogoHeight;
        }
    })
})


// carouseel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bebida-destaque");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function somar_subtrair(id) {

    var button = document.getElementById(id);
    var n = document.getElementById('b2').innerText
    var oldValue = Number(n)
  
    if (button.innerText == "+") {
        var newVal = oldValue + 1;
      } else {
     
      if (oldValue > 0) {
        var newVal = oldValue - 1;
      } else {
        newVal = 0;
      }
    }
    newVal = String(newVal)
    n.innerText=newVal;
  
};

function fim(){
    var totalPagar = document.getElementById("totall").innerText
    alert("Total a pagar: " + totalPagar)
}

var pedido = document.getElementById('pedidoo')
var preco_car = document.getElementById('preco')
var totalPagar = document.getElementById("totall")

function addCarrinho() {
    var qt = document.getElementById('add').value
    var bebida = document.getElementById('bebida-e-preco').innerText
    var preco = document.getElementById('precoo').innerText

    pedido.innerText = `${qt} X ${bebida}`
    preco_car.innerText = `${preco}`
    totalPagar.innerText = `${Number(qt)*Number(preco)}`
}