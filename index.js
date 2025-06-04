import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3020;

app.use(cors());

app.get('/now-playing', async (req, res) => {
  try {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.REFRESH_TOKEN,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    const tokenRes = await axios.post(
      'https://accounts.spotify.com/api/token',
      params.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const access_token = tokenRes.data.access_token;

    const nowPlayingRes = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    res.status(200).json({
    track: nowPlayingRes.data.item.name,
    artist: nowPlayingRes.data.item.artists[0].name,
    albumImage: nowPlayingRes.data.item.album.images[0].url,
    url: nowPlayingRes.data.item.external_urls.spotify,
    isPlaying: nowPlayingRes.data.is_playing
    });

  } catch (err) {
    res.status(500).json({
      error: 'Unable to fetch now playing',
      details: err.response?.data || err.message
    });
  }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})