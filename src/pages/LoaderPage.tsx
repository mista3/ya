import { useEffect, useState } from 'react'
import { service } from '../service'

export default function LoaderPage() {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      await service.getHeavy()
      setLoading(false)
    })()
  }, [])
  
  return <div className="page">
    <div className="loader-page">
      {isLoading ? 'true' : 'false'}
    </div>
  </div>
}