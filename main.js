console.log('conectou');
let corpo = document.querySelector("body");
let titulo = document.createElement("h1");
let produtos = document.createElement("section");


titulo.innerText=`Site de Produtos`
corpo.appendChild(titulo)


produtos.innerHTML =`<h2>Produtos</h2>
<p>Nome: Furadeira</p>
<p>Descrição: Furadeira de 1/2 polegada </p>
<p>Preço: R$500,00 </p>`

corpo.appendChild(produtos)
console.log(titulo)