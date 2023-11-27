import { useEffect, useState } from 'react'
import { clearData, fetchDonut, fetchEarthquakes, useDispatch, useSelector } from 'store'
import { Data } from 'components'
import './ParallelPage.css'

export default function ParallelPage() {
  const isDonutLoading = useSelector(state => state.json.donutLoading)
  const isEarthquakesLoading = useSelector(state => state.json.earthquakesLoading)
  const donut = useSelector(state => state.json.donut)
  const earthquakes = useSelector(state => state.json.earthquakes)
  const dispatch = useDispatch()

  const [abort, setAbort] = useState(() => () => {})

  const fetch = () => {
    abort()
    dispatch(clearData())
    setTimeout(() => {
      const promise1 = dispatch(fetchDonut())
      const promise2 = dispatch(fetchEarthquakes())
      
      setAbort(() => () => {
        promise1.abort()
        promise2.abort()
      })
    })
  }

  useEffect(() => {
    return () => {
      abort()
    }
  }, [abort])
  
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