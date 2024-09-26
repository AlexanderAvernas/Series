import { Link } from "react-router-dom"
import { useWatchList } from "../context/WatchListContext"

const ListPage = () => {
    const { watchList, dispatch } = useWatchList();  // Get the saved shows and dispatch function

    const removeFromWatchList = (id) => {
        dispatch({ type: 'REMOVE_FROM_LIST', payload: id });
      };

  return (
    <div>
        <Link to={'/'}>Back</Link>
    <h1>Must Watch List</h1>
    {watchList.length > 0 ? (
      watchList.map((show) => (
        <div key={show.id}>
          <p>{show.name}</p>
          <button onClick={() => removeFromWatchList(show.id)}>Remove from Watch List</button>
        </div>
      ))
    ) : (
      <p>No shows in your watch list</p>
    )}
  </div>
  )
}
export default ListPage
