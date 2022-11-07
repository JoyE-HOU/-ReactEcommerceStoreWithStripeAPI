// Coffee: price_1M04Q0JyZ9iUdArzetBbIVHg
// Sunglasses: price_1M04a4JyZ9iUdArzkj1StNx9
// Camera: price_1M04fIJyZ9iUdArzNsgDTaTy

const productsArray = [
    {
        id: "price_1M04Q0JyZ9iUdArzetBbIVHg",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1M04a4JyZ9iUdArzkj1StNx9",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1M04fIJyZ9iUdArzNsgDTaTy",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };