import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
document.querySelector('#app2').innerHTML = `
  <h1>Oque Vamos ver no curso da Brainn.co!</h1>

`

document.addEventListener("DOMContentLoaded", function(){
   
  var links = document.querySelectorAll(".ul_ajudamos li");
  for(let x=0; x < links.length; x++){
     
     links[x].onmouseover = function(){
        
        document.querySelector("#imagem img").src = this.querySelector("img").src;
        
     }
     
  }
  
});