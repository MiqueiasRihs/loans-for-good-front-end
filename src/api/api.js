import { notification } from "../components/Notification/Notification";

class LFGRequest {
    constructor() {
        this.base_api_url = "http://localhost:8000/api";
    }

    request(method, url, data = null) {
        let Url = new URL(this.base_api_url + url);

        return fetch(Url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : null,
        })
            .then((response) => {
                return response.json().then((data) => {
                    if (!response.ok) throw new Error(data.message);
                    notification.success(data.message)
                    return data;
                });
            })
            .catch((error) => {
                notification.error(error.message);
                return { error: error.message };
            });
    }

    getFieldsForm() {
        let url = "/analise-de-cliente"
        return this.request('GET', url);
    }

    postAnalysisData(postData) {
        let url = "/analise-de-cliente/"
        return this.request('POST', url, postData)
    }
}

export const request = new LFGRequest()
