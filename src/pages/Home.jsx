import { Link } from "react-router-dom"
import AllSeries from "../components/AllSeries"
import Hero from "../components/Hero"

const Home = () => {

  return (
    <div>
        <Hero/>
        <AllSeries/>
        <Link to="/ListPage">Link</Link>
    </div>
  )
}
export default Home
