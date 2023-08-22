

(async () => {
    const productContainerEl = document.getElementById('productContainer');
    const url = "https://fakestoreapi.com/products";

    const fetchProduct = async () => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (error) {
            return error
        }
    }
    const products = await fetchProduct();

    const generatedProducts = (product) => {
        return `
        <div class="product_card">
        <div class="image_container">
            <img src="${product.image}" alt="">
        </div>
        <div class="product_content">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <button>$${product.price}</button>
        </div>
    </div>
        `
    }

    const renderProducts = (products) => {
        productContainerEl.innerHTML = "";
        products.forEach(product => {
            productContainerEl.innerHTML += generatedProducts(product);
        })
    }
    renderProducts(products);
})()