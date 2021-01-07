import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID IJf5Yqay_WDRZ7XIb2_rlg3ZX0Wnakub6rgjvfsakaM',
    }
})