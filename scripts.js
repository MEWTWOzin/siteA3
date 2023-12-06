// Array de produtos eletrônicos
const electronicsProducts = [
    { name: "Samsung A13", price: 699.99, image: "smartphone.jpg" },
    { name: "Notebook dell", price: 1299.99, image: "laptop.jpg" },
    { name: "Samsung Smart TV", price: 899.99, image: "smart_tv.jpg" },
    // Adicione mais produtos conforme necessário
];

// Função para adicionar produtos à seção de vendas
function addProductsToSection() {
    const productListContainer = document.getElementById("product-list");

    electronicsProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Preço: $${product.price.toFixed(2)}`;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Comprar";
        buyButton.className = "buy-button";
        buyButton.addEventListener("click", () => {
            // Adicione aqui a lógica para o processo de compra
            alert(`Você comprou ${product.name}`);
        });

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(buyButton);

        productListContainer.appendChild(productCard);
    });
}

// Chame a função para adicionar os produtos à página quando a página carregar
window.onload = addProductsToSection;
