import Api from "./Api";

class TransactionApi {
    getAllTransaction() {
        return Api.get('/transaction');
    }

    getTransactionById(id) {
        return Api.get('/transaction/'+id);
    }

    createTransaction(transaction) {
        return Api.post('/transaction', transaction);
    }

    updateTransaction(transaction) {
        return Api.put('/transaction', transaction);
    }

    deleteTransaction(id) {
        return Api.delete('/transaction/'+id);
    }
}

export default new TransactionApi();