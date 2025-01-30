//let trilho = document.getElementById('trilho')
//let body = document.querySelector('body')
//trilho.addEventListener('click', ()=>{
  //  trilho.classList.toggle('dark')
//  body.classList.toggle('dark')
//})


//PARTE HTML  
//<div class="trilho" id="trilho">
      //  <div class="indicador">
     //   </div>
   // </div>

    //<script src="main.js">
    //</script>

//prototipo modo escuro


function sobre() {
  window.location.href = "sobre.html";
}
function index() {
  window.location.href = "index.html";
}
function contato() {
  window.location.href = "contato.html";
}
function login() {
  window.location.href = "login.html";
}
function compras() {
  window.location.href = "compras.html";
}
function carrinho(){
  window.location.href = "carrinho.html";
}

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})








