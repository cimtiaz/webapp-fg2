import Api from "./Api";

class SellerApi {
    getAllSellers() {
        return Api.get('/seller');
    }

    getSellerById(id) {
        return Api.get('/seller/'+id);
    }

    createSeller(seller) {
        return Api.post('/seller', seller);
    }

    updateSeller(seller) {
        return Api.put('/seller', seller);
    }

    deleteSeller(id) {
        return Api.delete('/seller/'+id);
    }
}

export default new SellerApi();