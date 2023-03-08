import useFetch from 'react-fetch-hook'

export default function Rick() {

    // fetch('https://rickandmortyapi.com/api/character?page=2')
    //     .then(data => data.json())
    //     .then(data => console.log(data))


    const { data } = useFetch("https://rickandmortyapi.com/api/character?page=2");
    console.log(data?.results)

    const newRick = data?.results.map(item => <li key={item.id}>{item.name}</li>)
    return <ul>{newRick}</ul>

}