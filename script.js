//Capturo el label, Checkbox y el body
let modo = document.getElementById("lbl");
const checkbox = document.getElementById("switch");
let body = document.body;

// Acciones al presionar el suiche Deslizante
modo.addEventListener("click", function() {
  // Guardo el estado del body (Dark/light)
  let val = body.classList.toggle("dark");
  localStorage.setItem('modo',val);

  // Guardo el estado del checkbox para evitar devolucion
  localStorage.setItem("checkboxState", checkbox.checked);

});

// Recupero los estados del body y checkbox
const valor = localStorage.getItem('modo');
const checkboxState = localStorage.getItem("checkboxState");

// Asigno los ultimos estados al body y al suiche
if(valor=='true'){
  body.classList.add('dark');
  checkbox.checked = true;
}else{
  body.classList.remove('dark');
  checkbox.checked = false;
}