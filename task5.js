const container = document.getElementById("productContainer");


fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => displayProducts(data));


function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <div class="content">
        <span class="category">${product.category}</span>
        <h3>${product.title.substring(0, 40)}...</h3>
        <p class="price">$${product.price}</p>
        <button onclick="deleteProduct(${product.id}, this)">
           Delete
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}


function deleteProduct(id, btn) {

  
  btn.parentElement.parentElement.remove();

  
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(data => console.log("Deleted:", data));
}   
