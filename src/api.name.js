import axios from "axios";

export const fetchPopularRepos = (name) => {
    return axios.get(encodeURI(`https://api.github.com/search/repositories?q=${name}&sort=desc&type=Repositories`))
        .then(response => response.data.items)
        .catch(error => {
            throw new Error(error)
        })
}
