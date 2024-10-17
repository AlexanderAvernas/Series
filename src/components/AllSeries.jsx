import axios from "axios"
import { useEffect, useState } from "react"
import SeriesByGenre from "./SeriesByGenre"
import MiddleHero from "./MiddleHero"

const AllSeries = () => {
    const [allSeries, setAllSeries] = useState([])
    const [loading, setLoading] = useState(true);

    // Fetching all the series
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows`)
        .then(response => {
            setAllSeries(response.data)
            console.log('Data', response.data);
            setLoading(false)
        })
        .catch(error => {
            console.log('Error fetching data', error);
            setLoading(false)
        })
    }, [])

    // Filter the series to diffirent genres depending if it incluedes the the choosen genre
    const dramaSeries = allSeries.filter((series) => series.genres.includes("Drama"));
    const comedySeries = allSeries.filter((series) => series.genres.includes("Comedy"));
    const thrillerSeries = allSeries.filter((series) => series.genres.includes("Thriller"));
    const crimeSeries = allSeries.filter((series) => series.genres.includes("Crime"));
    const actionSeries = allSeries.filter((series) => series.genres.includes("Action"));
    const familySeries = allSeries.filter((series) => series.genres.includes("Family"));


  return (
    <div>
        <div style={{padding: "2rem 1rem"}}>
        <SeriesByGenre title="Action Series" series={actionSeries} loading={loading}/>
        <SeriesByGenre title="Comedy Series" series={comedySeries} loading={loading}/>
        <SeriesByGenre title="Thriller Series" series={thrillerSeries} loading={loading}/>
        </div>
        <MiddleHero/>
        <div style={{padding: "2rem 1rem"}}>
        <SeriesByGenre title="Drama Series" series={dramaSeries} loading={loading}/>
        <SeriesByGenre title="Family Series" series={familySeries} loading={loading}/>
        <SeriesByGenre title="Crime Series" series={crimeSeries} loading={loading}/>
        </div>
    </div>
  )
}
export default AllSeries
