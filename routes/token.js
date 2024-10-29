const express = require('express');
const router = express.Router();
const { AccessToken } = require('twilio').jwt;
const VideoGrant = AccessToken.VideoGrant;

// Endpoint for token generation
router.get('/', (req, res) => {
    const identity = req.query.identity;
    if (!identity) {
        return res.status(400).json({ error: 'Identity is required' });
    }

    // Assuming Twilio credentials are loaded
    const token = new AccessToken(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET, { identity });
    const videoGrant = new VideoGrant();
    token.addGrant(videoGrant);

    res.json({ token: token.toJwt() });
});

module.exports = router;
