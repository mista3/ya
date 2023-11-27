import { LoadingGif } from 'public/img'

export default function Data({loading, data}: {loading: boolean, data: string}) {
  
  return (
    <div className="data">
      <div>
        {loading ? <img src={LoadingGif}/> : data}
      </div>
    </div>
  )
}