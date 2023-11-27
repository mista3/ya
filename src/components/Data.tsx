import { LoadingGif } from 'public/img'
import { useEffect } from 'react'

export default function Data({loading, data}: {loading: boolean, data: string}) {
  
  return (
    <div className="data">
      <div>
        {loading ? <img src={LoadingGif}/> : data}
      </div>
    </div>
  )
}