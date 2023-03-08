import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

import { GET_POST } from '../data/pablicApi'


export default function Home() {


    const { loading, error, data } = useQuery(GET_POST)
    const [out, setOut] = useState();

    const favorivePost = []

    useEffect(() => {
        setOut(data?.posts.data)
    }, [data?.posts])



    function addFav(item) {
        favorivePost.push(item.attributes.name)
        console.log(favorivePost);

    }
    const Posts = (item) => (
        <div key={item.id} className='carts__item'>
            <h2 className='carts__name'>{item.attributes.name}</h2>
            <p>Категорія: {item.attributes.category}</p>

            <Link to={`/post/${item.attributes.category}/${item.id}`}>Read more</Link>

            <button onClick={() => addFav(item)}>Add</button>
        </div>
    )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div className="App">
            <h2>My first Apollo app 🚀</h2>
            <div className='carts'>
                {out?.map(item => Posts(item))}
            </div>
        </div>
    );
}

