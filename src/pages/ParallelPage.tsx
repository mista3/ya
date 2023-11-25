import { useEffect, useState } from 'react'
import { service } from '../service'

export default function ParallelPage() {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      await Promise.all([
        service.getLight(),
        service.getHeavy(),
      ])
      setLoading(false)
    })()
  }, [])
  
  return <div className="page">
    <div className="parallel-page">
      {isLoading ? 'true' : 'false'}
    </div>
  </div>
}