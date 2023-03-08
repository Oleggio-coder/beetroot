import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POST } from '../data/pablicApi'


export default function Home() {




    const { data } = useQuery(GET_POST)
    const [out, setOut] = useState();

    console.log(data?.posts.data);

    useEffect(() => {
        setOut(data?.posts.data)
    }, [data?.posts])


    const Posts = (item) => (
        <div onClick={() => setOut(item)} className='carts__item'>
            <h2 className='carts__name'>{item.attributes.name}</h2>
            <p>Категорія: {item.attributes.category}</p>
        </div>
    )

    function singPost() {
        return (
            <div className='carts__item carts__item--singl'>
                <button onClick={() => { setOut(data?.posts.data) }}>Back</button>
                <h2 className='carts__name'>{out?.attributes.name}</h2>
                <p className='carts__name'>{out?.attributes.description}</p>
                <img src={`http://localhost:1337${out?.attributes.img.data.attributes.url}`} alt="img" width='200' />
                <p>Категорія: {out?.attributes.category}</p>
            </div>
        )
    }

    return (
        <div className="App">
            <h2>My first Apollo app 🚀</h2>
            <div className='carts'>
                {out?.length ? out?.map(item => Posts(item)) : singPost()}
            </div>
        </div>
    );
}

