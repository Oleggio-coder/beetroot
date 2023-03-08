import './insex.scss'

export default function  Post({item}) {
    return (
        <div className="blog__item" onClick={()=> {
            console.log(item)
        }}>
            <h2>{item.title}</h2>
            <p>{item.shortDescription}</p>
            <i>{item.data}</i>
        </div>
    )
}