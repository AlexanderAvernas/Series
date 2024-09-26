import { Link } from "react-router-dom"
import AllSeries from "../components/AllSeries"
import { useWatchList } from "../context/WatchListContext"
import Hero from "../components/Hero"

const Home = () => {
    const {watchList} = useWatchList();

  return (
    <div>
        <Hero/>
        <div style={{backgroundColor: "grey"}}>
        <h1>Home</h1>
        <p>Saved shows: {watchList.length}</p>
        <Link to="/ListPage">Link to saved shows</Link>
        </div>
        <AllSeries/>
        <Link to="/ListPage">Link</Link>
    </div>
  )
}
export default Home
