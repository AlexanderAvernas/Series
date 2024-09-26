import { Link } from "react-router-dom" // use the Link to enter the specific show sending the show.id in the URL
import { useWatchList } from "../context/WatchListContext"

/* eslint-disable react/prop-types */
const DramaSeries = ({series}) => {

    const {dispatch} = useWatchList()

    const addToWatchList = (show) => {
       dispatch({type: 'ADD_TO_LIST', payload: show})
    }
  return (
    <div>
        <h1>Drama Series</h1>
        {series.map((show) => (
            <p key={show.id}>
                <Link to={`/show/${show.id}`}>{show.name}</Link>
                <button onClick={() => addToWatchList(show)}>Add To List</button>
            </p>
        ))}
    </div>

  )
}
export default DramaSeries
