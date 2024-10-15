import axios from "axios"
import { useEffect, useState } from "react"
import SeriesByGenre from "./SeriesByGenre"

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


  return (
    <div>
        <SeriesByGenre title="Drama Series" series={dramaSeries} loading={loading}/>
        <SeriesByGenre title="Comedy Series" series={comedySeries} loading={loading}/>
        <SeriesByGenre title="Thriller Series" series={thrillerSeries} loading={loading}/>
    </div>
  )
}
export default AllSeries
