import axios from "axios";

const KEY = 'AIzaSyC7xBf-pe-HgDbnM3tmzWJRCUlggjJISPY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY
    }
})