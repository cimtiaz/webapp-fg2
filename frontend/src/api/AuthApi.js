import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({name, email, password,address,phone}) {
        return Api.post('/register', {name, email, password,address,phone});
    }
}

export default new AuthApi();