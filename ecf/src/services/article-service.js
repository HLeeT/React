import axios from 'axios';

const API_URL = "http://localhost:3002/articles" //url de l'api 

const getArticles = () => {
    return fetch(API_URL)
}

const addArticle = product => {
    return axios.post(API_URL, product)
}

const updateArticle = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

const removeArticle = id => {
    return axios.delete(`${API_URL}/${id}`);
};

export default { //export de la fonction getProducts
    getArticles,
    addArticle,
    updateArticle,
    removeArticle
}