import MeStyle from './me.module.css'

export default function Me({ data }) {

    const default_me = {
        display_name: 'Carregando...', 
        followers: {total: 0}, 
        external_urls: {spotify: '#'},
        images: [
            {url: '/spotify-512.webp'}
        ],
        id: '#'
    }
    
    const object_me = data.display_name ? data : default_me

    return (
        <div className={MeStyle.component} >
            <img src={object_me.images[0].url} alt={'Photo: ' + object_me.display_name} width={200}/>
            <div>{object_me.display_name.toUpperCase()}</div>
            <div>FOLLOWERS: {object_me.followers.total}</div>
            <div><a href={object_me.external_urls.spotify} target="_blank" rel="noopener">@{object_me.id.toUpperCase()}</a></div>
        </div>
    )
}
