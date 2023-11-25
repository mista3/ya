import './style.css'
import { useSelector } from './store'
import { useMemo } from 'react'
import { routes } from './router'
import {Header} from './components'

export default function App() {
  const tab = useSelector(state => state.tab.tab)

  const currentPage = useMemo(() => {
    return routes[tab]
  }, [tab])
  
  return (
    <div className='app'>
      <Header />
      {currentPage}
    </div>
  )
}