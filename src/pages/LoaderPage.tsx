import { useEffect, useState } from 'react'
import { fetchDonut, useDispatch, useSelector } from 'store'
import { Data } from 'components'

export default function LoaderPage() {
  const isLoading = useSelector(state => state.json.donutLoading)
  const donut = useSelector(state => state.json.donut)
  const dispatch = useDispatch()

  const [abort, setAbort] = useState(() => () => {})

  useEffect(() => {
    setTimeout(() => {
      const promise = dispatch(fetchDonut())
      
      setAbort(() => () => {
        promise.abort()
      })
    })
  }, [])

    useEffect(() => {
    return () => {
      abort()
    }
  }, [abort])
  
  return <div className="page">
    <div className="loader-page">
      <Data loading={isLoading} data={donut} />
    </div>
  </div>
}