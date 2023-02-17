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

let quantityTotals = 0;
let priceTotals=0;
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
        .then((data) => {afficheProduit (data,canape);
          /*totalprix = Number(data.price) * Number(canape.quantity);
          totalquantité = Number(canape.quantity);*/
           quantityTotals += parseInt(canape.quantity);
           priceTotals += data.price * parseInt(canape.quantity);
           document.getElementById("totalQuantity").innerHTML = quantityTotals;
           document.getElementById("totalPrice").innerHTML = priceTotals;
        
        })
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
    
  });

}
checkDelete();

  function savePanierLS(panier){
    localStorage.setItem("produit",JSON.stringify(panier));
    if (panier == undefined){
      panier = [];
    }
  }

  function checkQuantity() {
    const formQuantity = document.getElementById("cart__items");
    formQuantity.addEventListener('change',(event)=>{

      if (event.target.tagName === "INPUT"){ 
      const item = event.target.closest (".cart__item");
      const id = item.dataset.id;
      const color = item.dataset.color;
      newQuantity= event.target.value;
      let panier = getPanierLS ();
      let foundProduct = panier.find(p=>p.id == id && p.color == color);
      if (foundProduct != undefined){
      if (newQuantity >100 ||newQuantity <=0){
      alert ("Quantité entre 1 et 100");
      event.target.value = foundProduct.quantity;
      } else {
        foundProduct.quantity = parseInt (newQuantity);
        savePanierLS(panier);
        window.location.reload();

        console.log (checkQuantity)
      }
    }}});}
checkQuantity();


/* Afficher Total prix articles et total quantité */ 
function totalArticles(){
let totalItems = 0;
let totalProducts=0;
for (e in panier){let urlKanap = "http://localhost:3000/api/products/"+ canape.id;
console.log (urlKanap);
      fetch(urlKanap)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {afficheProduit (data,canape);
      
    
})
          

  
 
const totalQuantity = document.getElementById('totalQuantity');
  totalQuantity.textContent = totalItems;
  const totalPrix = document.getElementById('totalPrice');
  totalPrix.replaceChildren(totalprice)
  
}}


const myForm = document.querySelector(".cart__order__form");
const email = document.querySelector('#email');
const sendorder = document.getElementById('order');

sendorder.addEventListener ('click',   function(){ 
  validEmail ();
  validFirstname();
  validLastname();
  validAddress();
  validCity();

});
function validEmail (){
  const emailValue = email.value.trim();
  const emailMessage = document.querySelector('#emailErrorMsg');
if (!emailValue.match (
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
){ 
  emailMessage.textContent= "Email non conforme";
}
else {emailMessage.textContent=""};
console.log (validEmail)
}

function validFirstname (){
let firstNameMessage = document.querySelector("#firstNameErrorMsg");
let firstNameValue = firstName.value.trim();
 if (!firstNameValue.match(/^[a-zA-Z-\s]+$/)) {
  firstNameMessage.textContent="Ne doit pas contenir de chiffres";

}else { firstNameMessage.textContent=""}}

function validLastname (){
  let lastNameMessage = document.querySelector("#lastNameErrorMsg");
  let lastNameValue = lastName.value.trim();
   if (!lastNameValue.match(/^[a-zA-Z-\s]+$/)) {
    lastNameMessage.textContent="Ne doit pas contenir de chiffres";
  
  }else { lastNameMessage.textContent=""}}
  
function validAddress() { 
  let addressNameMessage = document.querySelector('#addressErrorMsg');
  const addressNameValue = address.value.trim();

  // Si la valeur du champ "Adresse" est vide
  if (addressNameValue === '') {
    // Affiche un message d'erreur
    addressNameMessage.textContent = 'Ne peut pas être vide';
  }
  // Si aucune erreur n'est détectée
  else {
    // Efface le message d'erreur
    addressNameMessage.textContent = '';
  }
}

function validCity() {
  // Récupère l'élément HTML qui affiche le message d'erreur pour le champ de saisie de la ville
  let cityNameMessage = document.querySelector('#cityErrorMsg');
  const cityNameValue = city.value.trim();

  // Si la valeur du champ de saisie de la ville est vide
  if (cityNameValue === '') {
    // Affiche un message d'erreur indiquant que le champ de saisie de la ville ne peut pas être vide
    cityNameMessage.textContent = 'Ne peut pas être vide';
  } else {
    // Si la valeur du champ de saisie de la ville n'est pas vide, efface le message d'erreur
    cityNameMessage.textContent = '';
  }
}


