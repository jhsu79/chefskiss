const axios = require('axios');
const YELP_API_KEY = process.env.YELP_API_KEY; 

module.exports = {
    searchYelp,
  };

  //searchYelp function for API
  async function searchYelp(req, res) {
    const location = req.body.location;

    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: { 
            location,
            term: 'restaurants',
            sort_by: 'distance',
            radius: 40000, // 20 miles since Yelp requires radius to be in meters
            limit: 5, // Limiting the search result
        },
        headers: {
            'Authorization': `Bearer ${YELP_API_KEY}`
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}