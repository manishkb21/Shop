const fs = require('fs');
const { parse } = require('path');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id){
        //fetch the previous cart
        fs.readFile(p ,(err, fileContent)=>{
            let cart = {products : [], totalPrice : 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
                //analyze the cart find the existing products
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct ;
            //ad new product / increase the quantity
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct = updatedProduct.qty + 1;
                cart.products = {...cart.products};
                // cart.products[existingProductIndex] =  
            } else {
                updatedProduct = { id: id, qty : 1};
                cart.products = {...cart.products};
            }
            cart.totalPrice = cart.totalPrice + productPrice;
        });
    };
}