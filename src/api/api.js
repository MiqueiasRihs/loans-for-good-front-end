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
}

export const request = new LFGRequest()


// Exemplo de uso:

// // GET request
// request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
//     .then((data) => {
//         if (data) {
//             console.log('Dados recebidos:', data);
//         } else {
//             console.error('Erro na requisição GET.');
//         }
//     });

// // POST request
// const postData = {
//     userId: 1,
//     id: 101,
//     title: 'foo',
//     body: 'bar',
// };

// request('POST', 'https://jsonplaceholder.typicode.com/posts', postData)
//     .then((data) => {
//         if (data) {
//             console.log('Dados enviados com sucesso:', data);
//         } else {
//             console.error('Erro na requisição POST.');
//         }
//     });
