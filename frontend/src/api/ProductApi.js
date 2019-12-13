import Api from "./Api";

class ProductApi {
    getAllProducts() {
        return Api.get('/product');
    }

    getProductById(id) {
        return Api.get('/product/'+id);
    }

    createProduct(product) {
        return Api.post('/product', product);
    }

    updateProduct(product) {
        return Api.put('/product', product);
    }

    deleteProduct(id) {
        return Api.delete('/product/'+id);
    }

}

export default new ProductApi();