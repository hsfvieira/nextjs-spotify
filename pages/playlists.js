import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import playlistsStyles from '../styles/playlists.module.css'
import Playlist from '../components/playlist'
import Me from '../components/me'

export default function Playlists() {
    const router = useRouter()
    const { token } = router.query

	const [playlists, setPlaylists] = useState({})
	const [me, setMe] = useState({})

	useEffect(() => {
		async function getData(token, setPlaylists, setMe) {
            if(!token) {
                return null
            }
    		const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    		    method: 'GET',
    		    headers: {
    		        'Authorization': `Bearer ${token}`
    		    }
    		})
    		const response_me = await fetch('https://api.spotify.com/v1/me', {
    		    method: 'GET',
    		    headers: {
    		        'Authorization': `Bearer ${token}`
    		    }
    		})
			setPlaylists(await response.json())
			setMe(await response_me.json())
		}
		getData(token, setPlaylists, setMe)
    }, [token])

    

    return (
        <>
            <Head>
                <title>Playlists of Spotify</title>
                <meta name="description" content="Lista de todas as Playlists do meu Spotify" />
            </Head>
            <Me data={me} />
            <div className={playlistsStyles.container} >
                {playlists.items ? playlists.items.map(playlist => (
                    <Playlist data={playlist} key={playlist.id} />
                )) : null}
            </div>
        </>
    )
    }