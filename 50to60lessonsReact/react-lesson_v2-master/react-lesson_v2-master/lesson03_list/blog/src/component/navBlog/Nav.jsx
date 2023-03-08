import './index.scss'

export default  function  NavBlog({item}) {

    function singPost() {
        console.log(item.id)
    }

    return (
        <li>
            <button className='button' onClick={singPost}>{item.title}</button>
        </li>
    )
}