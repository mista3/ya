import { useEffect } from 'react'
import { fetchDonut, useDispatch, useSelector } from '../store'
import { Data } from '../components'

export default function LoaderPage() {
  const isLoading = useSelector(state => state.json.donutLoading)
  const donut = useSelector(state => state.json.donut)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDonut())
  }, [])
  
  return <div className="page">
    <div className="loader-page">
      <Data loading={isLoading} data={donut} />
    </div>
  </div>
}