/* eslint-disable react/prop-types */
const ComedySeries = ({series}) => {
  return (
    <div>
        <h1>ComedySeries</h1>
        {series.map((show) => (
            <p key={show.id}>{show.name}</p>
        ))}
    </div>
  )
}
export default ComedySeries
