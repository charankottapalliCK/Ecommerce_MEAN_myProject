var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce');

var product = [
    new Product({
    image:"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372",
    title:"Shirt",
    cost: 15
}),
    new Product({
        image:"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372",
        title:"Shirt",
        cost: 15
    }),
    new Product({
        image:"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372",
        title:"Shirt",
        cost: 15
    }),
    new Product({
        image:"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372",
        title:"Shirt",
        cost: 15
    }),
    new Product({
        image:"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372",
        title:"Shirt",
        cost: 15
    })
];
var d=0;
for(var i=0;i<product.length;i++){
    product[i].save(function (err,result) {
        d++;
        if(d=== product.length)
            exit();
    });
}
function exit(){
mongoose.disconnect();
}