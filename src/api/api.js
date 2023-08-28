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
                if (!response.ok) {
                    throw new Error('Erro de rede ou servidor.');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('Erro:', error.message);
                return null;
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
