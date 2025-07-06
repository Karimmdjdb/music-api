# 🎧 Now Playing API (Personal Spotify Integration)

This is a personal REST API that connects to **my Spotify account** to fetch the song I'm currently listening to in real time.

It powers the "Fun Zone" section on my portfolio:  
👉 [medjdoub-karim.fr](https://medjdoub-karim.fr)

## 🌐 Endpoint

The API is deployed at:  
[https://api.medjdoub-karim.fr/music/now-playing](https://api.medjdoub-karim.fr/music/now-playing)

> ⚠️ Note: This API is tailored specifically for my own Spotify account. It won't work for others unless reconfigured with different credentials.

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- Spotify Web API

## ⚙️ How It Works

- Authenticates with the Spotify Web API using a refresh token  
- Retrieves the currently playing track on **my Spotify account**  
- Returns the song’s metadata as JSON (title, artist, album art, etc.)  
- Used to dynamically display what I'm listening to on my personal website

## 📦 Local Setup (Optional)

This API is not meant for public use, but here's how it works internally:

1. Get your own Spotify Developer credentials:  
   - `SPOTIFY_CLIENT_ID`  
   - `SPOTIFY_CLIENT_SECRET`  
   - `SPOTIFY_REFRESH_TOKEN` (from OAuth flow)

2. Clone the repo:

```bash
git clone https://github.com/Karimmdjdb/MusicAPI.git
cd music-api
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

5. Start the API:

```bash
node index.js
```

Access locally at `http://localhost:3000/music/now-playing`.

## 📄 API Response Example

```json
{
  "isPlaying": true,
  "title": "Bohemian Rhapsody",
  "artist": "Queen",
  "album": "A Night at the Opera",
  "albumImageUrl": "https://i.scdn.co/image/...",
  "trackUrl": "https://open.spotify.com/track/..."
}
```

## 📄 License

This project is licensed under the MIT License.

---

This API is a fun personal project to give my website a musical touch 🎵  
Feel free to get inspired, fork it, or build your own!
