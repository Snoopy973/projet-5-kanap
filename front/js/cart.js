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
  const myId = document.getElementById('cart__items'); 
  // creation article //
  const myArticle = document.createElement("article");
  myArticle.classList.add('cart__item');
  myArticle.dataset.id= produit._id;           
  myArticle.dataset.color= produit_panier.color;                                
  // creation du lien sur article
  myId.appendChild(myArticle);
  // div 
  const myDiv = document.createElement("div");
  myDiv.classList.add('cart__item__img');
  // creation du lien sur article
  myArticle.appendChild(myDiv);
  const img = document.createElement("img");
  myArticle.appendChild(img);
  img.src=produit.imageUrl
  img.alt = produit.altTxt+", "+produit.name;  
  myDiv.appendChild(img);
  const myDiv2 = document.createElement("div");
  myDiv2.classList.add('cart__item__content');
  myArticle.appendChild(myDiv2);
  const myDiv3 = document.createElement("div");
  myDiv3.classList.add('cart__item__content__description');
  myDiv2.appendChild(myDiv3);
  const myH2 = document.createElement("h2");
  myH2.h2 = produit.name;
  myH2.append(myH2.h2);
  myDiv3.appendChild(myH2);
  const myP1 = document.createElement("p");
  myP1.p = produit_panier.color;                                       
  myP1.append(myP1.p);
  myDiv3.appendChild(myP1);
  const myP2 = document.createElement("p");
  myP2.innerHTML = produit.price+ '€';
  myDiv3.appendChild(myP2);
  const myDiv4 = document.createElement("div");
  myDiv4.classList.add('cart__item__content__settings');
  myDiv2.appendChild(myDiv4);
  const myDiv5 = document.createElement("div");
  myDiv5.classList.add('cart__item__content__settings__quantity');
  myDiv4.appendChild(myDiv5);
  const myQuantite = document.createElement("p");
  myQuantite.innerText = 'Qté: ';                    
  myDiv5.appendChild(myQuantite);
  const myInput= document.createElement("input");                              
  myInput.type = "number";
  myInput.classList.add('itemQuantity');
  myInput.name = "itemQuantity";
  myInput.min = "1";
  myInput.max = "100";
  myInput.value = produit_panier.quantite; 
  myInput.innerHTML = myInput.value;                          
  myDiv5.appendChild(myInput);
  const myDiv6 = document.createElement("div");
  myDiv6.classList.add('cart__item__content__settings__delete');
  const myDeleteQuantite = document.createElement("p");
  myDeleteQuantite.classList.add('deleteItem');
  myDiv6.appendChild(myDeleteQuantite);
  myDeleteQuantite.innerText= "Supprimer";
  myDiv4.appendChild(myDiv6);}

  
/* fonction de suppression dans panier*/
function checkDelete(){
  document.addEventListener('click',(event) =>{
    if (event.target.className === "deleteItem") {
        const item = event.target.closest('.cart__item');/* tu prends l'article concerné*/
        const id = item.dataset.id; /* id de l'item*/
        const color = item.dataset.color; /* color de l'item*/
        let panier = getPanierLS();/* récuperation panier*/
        // supprime le id et color dont le bouton a ete cliqué
        panier = panier.filter(p => p.id != id && p.color != color);/* on prend tout ceux qui sont diffèrents de l'article*/
        savePanierLS(panier); /*fonction pour sauver le panier*/
        window.location.reload();
        console.log (checkDelete)
       
    }        
    checkDelete();
  });

}

  function savePanierLS(panier){
    localStorage.setItem("panier",JSON.stringify(panier));
    if (panier == undefined){
      panier = [];
    }
  }