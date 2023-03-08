import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook'

import './style.css'

export default function Rick() {

    //1: зробити карточку персонажа компонентом <Cart {...item} />

    const { isLoading, data, error } = useFetch('https://rickandmortyapi.com/api/character?page=2')

    if (error) { console.log(error) }

    const [out, setOut] = useState();
    const [select, setSelect] = useState([]);


    useEffect(() => {
        let newOption = []
        data?.results.forEach(item => newOption.push(item.species))

        let newOptionTwo = new Set(newOption)
        setSelect([...newOptionTwo])

        setOut(data?.results)
    }, [data?.results])

    function sortRik(event) {
        let newRick = [];
        data?.results.map(item => item.species === event.target.value && newRick.push(item))

        setOut(newRick)
    }

    return isLoading ?
        (<h2>...isLoading</h2>)
        : (
            <>
                <section className='rick'>
                    <h2 className='rick__title'>Rick an Morty</h2>

                    <select onChange={sortRik}>
                        {select.map((item, index) => <option key={index}>{item}</option>)}
                    </select>

                    <div className='rick__container'>
                        {out?.map(item =>
                            <div key={item.id} className='rick__cart'>
                                <h2 className='rick__cart-title'>{item.name}</h2>
                                <h5 className='rick__cart-sub-title'>{item.species}</h5>
                                <img className='rick__cart-img' src={item.image} alt="img" width="200" />
                                <h5 className='rick__cart-gender'>{item.gender}</h5>
                            </div>
                        )}
                    </div>
                </section>
            </>
        )
}