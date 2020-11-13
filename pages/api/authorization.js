export default (req, res) => {
    const scopes = [
        'streaming',
        'app-remote-control',
        'user-modify-playback-state',
        'user-library-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'user-read-playback-state'
    ]

    const redirectUri = process.env.REDIRECT_URI
    const clientId = process.env.CLIENT_ID

    res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(' ')}`)
}