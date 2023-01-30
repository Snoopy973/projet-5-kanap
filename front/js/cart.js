function getPanierLS(){
    let panier = localStorage.getItem("produit");
    //const test133 = console.table('panier function getLs '+ panier);
    if (panier == null){
      return[];
    } else{
      return tableauPanier = JSON.parse(panier);
    }
  }
  
  panier = getPanierLS();


for (let i=0;i<panier.length;i++) {
  const canape = panier [i];

let urlKanap = "http://localhost:3000/api/products/"+ canape.id;
console.log (urlKanap);
      fetch(urlKanap)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {afficheProduit (data,canape);})
      }
 
/* Je vais chercher les informations du local Storage pour affichage dans le DOM */ 
function afficheProduit(produit,produit_panier){
const cartItem = document.createElement("article");
  document.getElementById("cart__items").appendChild(cartItem)

  cartItem.className = ("cart__item")
  cartItem.dataset.color = produit_panier.color;
  cartItem.dataset.id= produit._id;

const cartItemImg = document.createElement("div");
document.querySelector(".cart__item").appendChild(cartItemImg);
cartItemImg.setAttribute ("class", "cart__item__img");



const img = document.createElement("img")
document.querySelector (".cart__item__img").appendChild(img);
img.src= produit.imageUrl; 

const cartItemContent = document.createElement ("div");
document.querySelector(".article");
cartItem.appendChild(cartItemContent)
cartItemContent.className = ("cart__item__content");

const cartItemDescription = document.createElement("div");
document.getElementsByClassName("cart__item__content");cartItemContent.appendChild(cartItemDescription);
cartItemDescription.className=("cart___item__description");


const productName= document.createElement("h2");
document.getElementsByClassName("cart__item__description");
cartItemDescription.appendChild(productName);
productName.innerHTML=produit.name;

const cartItemColor = document.createElement("p");
document.getElementsByClassName ("cart__item__description");
cartItemDescription.appendChild(cartItemColor);
cartItemColor.innerHTML=produit_panier.color;

const cartItemPrice = document.createElement ("p");
document.getElementsByClassName ("cart__item__description");
cartItemDescription.appendChild(cartItemPrice);
cartItemPrice.innerHTML = produit.price +"€";

const cartItemDelete = document.createElement ("div");
document.querySelector(".article");
cartItem.appendChild(cartItemDelete);
cartItemDelete.className = ("cart__item__delete")

const cartItemDeleteP= document.createElement ("p");
document.querySelector (".cart__item__delete")
cartItemDelete.appendChild(cartItemDeleteP);
cartItemDeleteP.innerHTML= "Supprimer"
cartItemDeleteP.className = "deleteItem"
}


/* fonction de suppression dans panier*/
function checkDelete(){
  document.addEventListener('click',(event) =>{
    if (event.target.className === "deleteItem") {
        const item = event.target.closest('.cart__item');/* tu prends l'article concerné*/
        const id = item.dataset.id; /* id de l'item*/
        const color = item.dataset.color; /* color de l'item*/
        let panier = getPanierLS();/* récuperation panier*/
        // supprime le id et color dont le bouton a ete cliqué
        panier = panier.filter(p => p.produit._id != id && p.produit_panier.color != color);/* on prend tout ceux qui sont diffèrents de l'article*/
        savePanierLS(panier); /*fonction pour sauver le panier*/
        window.location.reload();
        console.log("deleteItem" + panier)
    }        
  });

}

  function savePanierLS(panier){
    localStorage.setItem("panier",JSON.stringify(panier));
    if (panier == undefined){
      panier = [];
    }
  }