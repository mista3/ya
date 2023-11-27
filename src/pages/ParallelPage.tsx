import { fetchDonut, fetchEarthquakes, useDispatch, useSelector } from 'store'
import { Data } from 'components'

export default function ParallelPage() {
  const isDonutLoading = useSelector(state => state.json.donutLoading)
  const isEarthquakesLoading = useSelector(state => state.json.earthquakesLoading)
  const donut = useSelector(state => state.json.donut)
  const earthquakes = useSelector(state => state.json.earthquakes)
  const dispatch = useDispatch()

  const fetch = () => {
    dispatch(fetchDonut())
    dispatch(fetchEarthquakes())
  }
  
  return <div className="page">
    <div className="parallel-page">
      <div className='data-blocks'>
        <Data loading={isDonutLoading} data={donut} />
        <Data loading={isEarthquakesLoading} data={earthquakes} />
      </div>
      <button onClick={fetch} />
    </div>
  </div>
}