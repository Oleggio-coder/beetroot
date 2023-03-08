import useFetch from "react-fetch-hook";

export default function App() {
    const {isLoading, data, error } = useFetch("https://rickandmortyapi.com/api/character?page=2");

    if(error) {console.log(error)}

    const newRick = data?.results.map((item) => (
        <li key={item.id}>{item.name}</li>
    ));

    return isLoading ? <div>...Loading</div> : <ul>{newRick}</ul>
}