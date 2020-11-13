export default async (req, res) => {
    const { code } = req.query

    const redirectUri = process.env.REDIRECT_URI
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET

    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': body.length,
            'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
        }, 
        body
    })
    
    const responseData = await response.json()
    
    res.writeHead(301, {
		'Location': `/playlists?token=${responseData.access_token}`
    })
	
	res.end()
    
}
