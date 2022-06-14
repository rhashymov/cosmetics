import axios from "axios"

const instance = axios.create({
    baseURL: 'https://fortnite-api.com/v2/cosmetics/br'
})

export const  cosmeticsAPI = {
    getCosmetics() {
        return instance.get()
        .then(response => {
            return response.data
        })
    }
}