import { useEffect, useMemo } from 'react'
import { useSelector } from 'store'
import {Header} from 'components'
import { preloadImages } from 'helpers'
import { routes } from './router'

import {
  CounterPressedPng,
  LoaderPressedPng,
  MinusPressedPng,
  ParallelPressedPng,
  PlusPressedPng,
  FetchPressedPng,
} from 'public/img'

import './style.css'

export default function App() {
  const tab = useSelector(state => state.tab.tab)

  const currentPage = useMemo(() => {
    return routes[tab]
  }, [tab])

  useEffect(() => {
    preloadImages([
      CounterPressedPng,
      LoaderPressedPng,
      MinusPressedPng,
      ParallelPressedPng,
      PlusPressedPng,
      FetchPressedPng,
    ])
  }, [])
  
  return (
    <div className='app'>
      <Header />
      {currentPage}
    </div>
  )
}