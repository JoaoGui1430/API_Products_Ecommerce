import express from "express";
import { lerProdutos, salvarProdutos } from './data/products.js';
import { produtoAtualizacaoSchema, produtoSchema } from "./validacao.js";

const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
    const products = lerProdutos();
    res.status(200).send(products)
});
app.get('/products/:id', (req, res) => {
    const products = lerProdutos();
    const productId = parseInt(req.params.id);
    const product = products.find(infoProduct => infoProduct.id === productId);
    if (!product) {
        res.status(404).send('Produto Não Existente');
        return;
    }
    res.status(200).send(product);

});

app.put('/products/:id', (req, res) => {
    const products = lerProdutos();
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((ind) => ind.id === productId);
    if (!products) {
        res.status(404).send('Produto Não Existente');
        return;
    };
    const { error } = produtoAtualizacaoSchema.validate(req.body);
    if(error) {
        res.status(400).send(error);
        return;
    };
    
    const updatedProduct = { ...products[productIndex], ...req.body };
    products[productIndex] = updatedProduct;
    
    salvarProdutos(products);
    
    res.status(200).send(updatedProduct);
    
});

app.post('/products', (req, res) => {
    const { error } = produtoSchema.validate(req.body);
    if(error) {
        res.status(400).send(error);
        return;
    };
    const products = lerProdutos();
    const newId = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
    const newProduct = {
        id: newId,
        ...req.body
    };
    products.push(newProduct);
    salvarProdutos(products);
    res.status(201).send(newProduct);
});
app.delete('/products/:id', (req, res) => {
    const products = lerProdutos();
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((ind) => ind.id === productId);
    if (!products == -1) {
        res.status(404).send('Produto Não Existente');
        return;
    };
    const removedProduct = products.splice(productIndex, 1);
    salvarProdutos(products);
    res.send(removedProduct);
})

app.listen(2800, ()=> console.log('Servidor Rodando com sucesso'));