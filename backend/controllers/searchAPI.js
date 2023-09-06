const axios = require('axios');

module.exports = {
    searchAPI,
    indexAPI,
    getCurrencies,  
    getLanguages,
    getTypeahead,
  };

  async function searchAPI(req, res) {
  const { location_id, language = 'en_US', currency = 'USD', offset = '0' } = req.query;

  const encodedParams = new URLSearchParams();
  encodedParams.set('language', language);
  encodedParams.set('location_id', location_id);
  encodedParams.set('currency', currency);
  encodedParams.set('offset', offset);

  const options = {
      method: 'POST',
      url: 'https://worldwide-restaurants.p.rapidapi.com/search',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'process.env.RAPIDAPI_KEY',  
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
      },
      data: encodedParams,
  };

  try {
      const response = await axios.request(options);
      console.log("here are the options", options)
      console.log("this is the response", response)
      res.status(200).json(response.data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

async function indexAPI(req, res) {
  const { location_id, typeahead = 'band', language = 'en_US', currency = 'USD' } = req.query;

  const encodedParams = new URLSearchParams();
  encodedParams.set('currency', currency);
  encodedParams.set('language', language);
  encodedParams.set('location_id', location_id);
  encodedParams.set('q', typeahead);

  const options = {
      method: 'POST',
      url: 'https://worldwide-restaurants.p.rapidapi.com/detail',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'process.env.RAPIDAPI_KEY', 
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
      },
      data: encodedParams,
  };

  try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}
async function getCurrencies(req, res) {
  const options = {
      method: 'GET',
      url: 'https://worldwide-restaurants.p.rapidapi.com/currencies',
      headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,  // Use the variable
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
      }
  };

  try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

async function getLanguages(req, res) {
  const options = {
      method: 'GET',
      url: 'https://worldwide-restaurants.p.rapidapi.com/languages',
      headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,  // Use the variable
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
      }
  };

  try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

async function getTypeahead(req, res) {
  const options = {
      method: 'POST',
      url: 'https://worldwide-restaurants.p.rapidapi.com/typeahead',
      headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,  // Use the variable
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
      }
  };

  try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}