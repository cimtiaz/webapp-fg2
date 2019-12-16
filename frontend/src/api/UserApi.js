import Api from "./Api";

class UserApi {
    getCurrrentUser() {
        return Api.get('/user');
    }
}

export default new UserApi();