const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://curso-api_c:3000/cursos");
        res.json(response.data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;