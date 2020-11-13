import HomeStyles from '../styles/home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login with Spotify Account" />
			</Head>
			<div className={HomeStyles.container} >
				<Link href="/api/authorization"><button className={HomeStyles.button} >LOGIN WITH SPOTIFY</button></Link>
			</div>
		</>
	)
}
