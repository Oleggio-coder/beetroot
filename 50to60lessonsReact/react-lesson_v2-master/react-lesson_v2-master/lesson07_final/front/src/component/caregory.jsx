import { Link } from "react-router-dom";
export default function Category({ item }) {
    return (
        <>
            <Link to="/">Back</Link>
            <div className='carts__item carts__item--singl'>
                <h2 className='carts__name'>{item.attributes.name}</h2>
                <p className='carts__name'>{item.attributes.description}</p>
                <img src={`http://localhost:1337${item.attributes.img.data.attributes.url}`} alt="img" width='200' />
                <p>Категорія: {item.attributes.category}</p>
            </div>
        </>

    )
}