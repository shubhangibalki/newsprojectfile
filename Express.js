const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = 'your_gnews_api_key';

app.use(cors());

app.get('/news', async (req, res) => {
    const { query = '', page = 1 } = req.query;
    try {
        const response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&token=${API_KEY}&lang=en&page=${page}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching news');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
