let rootElement = document.getElementById("root");
let categoryElement = document.getElementById("Category");
// console.log(categoryElement)
let sortElement = document.getElementById("Sort");
let AllProduct;

async function productList() {
    try {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json();
        console.log(data)
        productsData(data);
        AllProduct=data;
        // sortedData(data);

    }
    catch (error) {
        console.log("error in fetching data", error);
    }
}
let productsData = (data) => {
    rootElement.innerHTML="";
    data.forEach((product) => {

        let productCard = document.createElement("div")
        productCard.className = "product-card";

        // let productImg = document.createElement("img")
        // productImg.src = product.image;
        // productImg.className = "product-img";

        // let productTitle = document.createElement("p")
        // productTitle.textContent = product.title;
        // productTitle.className = "product-title";

        // let productPrice = document.createElement("h5")
        // productPrice.textContent = `Price :$${product.price}`;
        // productPrice.className = "product-price";

        // let productRating = document.createElement("p");
        // productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count})`;
        // productRating.className = "product-rating";
        // if (product.rating.rate >= 4) {
        //     productRating.style.color = "green"
        // }
        // else {
        //     productRating.style.color = "red"
        // }
     productCard.innerHTML=`
     <img src=${product.image} class="product-img">
     <p class="product-title">${product.title} </p>
     <h5 class="product-price">Price: $${product.price}</h5>
     <p class="product-rating" style="color:${product.rating.rate>=4?"green":"red"};"> Rating: ${product.rating.rate} (${product.rating.count})</p>
     `
        // productCard.append(productImg, productTitle, productPrice, productRating);
        rootElement.append(productCard)
    })
}

categoryElement.addEventListener("change", () => {
    let selectedValue = categoryElement.value;
    // let filteredProducts = [];
 console.log(selectedValue)
        filteredProducts = AllProduct.filter(product => product.category == selectedValue);
    
    productsData(filteredProducts);
   
})
sortElement.addEventListener("change", () => {
    let SelectedOption = sortElement.value;

    if (SelectedOption == "Price:High to Low") {
        AllProduct.sort((a, b) => b.price - a.price)
    }
    if (SelectedOption == "Price:Low to High") {
        AllProduct.sort((a, b) => a.price - b.price)
    }
    productsData(AllProduct)

})

productList()


