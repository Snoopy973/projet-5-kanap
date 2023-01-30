const url ='http://localhost:3000/api/products';//récuperation de l'API

fetch('http://localhost:3000/api/products')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(data) {
    data.forEach ((element) => {createKanap (element);});
  })
  
  .catch(function(err){alert (err);
    
  });

  let createKanap= (product)=>{
  const link = document.createElement("a");
  document.getElementById("items").appendChild(link);
  const myArticle = document.createElement("article");
link.appendChild(myArticle);
const myImg = document.createElement("img");
myArticle.appendChild(myImg);
myImg.src = product.imageUrl;
myImg.setAttribute("alt", product.altTxt);
const myTitle = document.createElement("h3");
myArticle.appendChild(myTitle);
myTitle.innerText = product.name;
myTitle.classList.add ("productName")

const myDescription = document.createElement("p");
myArticle.appendChild(myDescription);
myDescription.innerText = product.description;
myDescription.classList.add ("productDescription")
document.getElementById("items").appendChild(link);
link.href = "./product.html?id=" + product._id;
}

