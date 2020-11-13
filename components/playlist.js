import PlaylistStyle from './playlist.module.css'

export default function Playlist({ data }) {
    
    return (
        <div className={PlaylistStyle.playlist} >
            <img src={data.images[0].url} width={100} height={100} alt={'Album: ' + data.name} />
            <div>{data.name.toUpperCase()}</div>
        </div>
    )
}
