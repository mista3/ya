import { useEffect, useMemo } from 'react'
import { navigate, useDispatch, useSelector } from 'store'
import {Header} from 'components'
import { preloadImages, tabs } from 'helpers'
import { routes } from './router'

import {
  CounterPressedPng,
  LoaderPressedPng,
  MinusPressedPng,
  ParallelPressedPng,
  PlusPressedPng,
  FetchPressedPng,
} from 'public/img'

import './index.css'
import { Tab } from 'types'

export default function App() {
  const tab = useSelector(state => state.tab.tab)
  const dispatch = useDispatch();

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

    const manageUrl = () => {
      const currentTab = window.location.pathname.replace('/', '') as Tab;

      if (tabs.includes(currentTab)) {
        dispatch(navigate(currentTab))
      } else {
        dispatch(navigate('counter'))
        window.history.replaceState('', '', 'counter')
      }
    }
    
    manageUrl()
    addEventListener('popstate', manageUrl)
  }, [])
  
  return (
    <div className='app'>
      <Header />
      {currentPage}
    </div>
  )
}