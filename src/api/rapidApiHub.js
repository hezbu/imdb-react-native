import axios from 'axios'

const getUpcomingTitles = async (page = '1', limit = '50') => {
   

    const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    params: {limit: limit, page: page},
    headers: {
        'X-RapidAPI-Key': 'ce1c1fc621msh03e6dead428314dp197a52jsnd4ef85156ee0',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
    };

    return await axios.request(options);
}

export default getUpcomingTitles;