import http from "../http-common";

class CreditScoreDataService {
    getAll() {
        return http.get("/creditscore");
    }

    get(id) {
        return http.get(`/creditscore/${id}`);
    }

    create(data) {
        return http.post("/creditscore", data);
    }
}

export default new CreditScoreDataService();