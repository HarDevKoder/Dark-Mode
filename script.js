
let modo = document.getElementById("lbl");
let body = document.body;

modo.addEventListener("click", () => {
  let val = body.classList.toggle("dark");
  localStorage.setItem('modo',val);
});

let valor = localStorage.getItem('modo');

if(valor=='true'){
  body.classList.add('dark');
}else{
  body.classList.remove('dark');
}

