import { useCallback, useMemo } from 'react';
import { clearData, navigate, useDispatch, useSelector } from 'store';
import { Tab } from 'types';
import './NavButton.css'

export default function NavButton({ tab } : { tab: Tab }) {
  const currentTab = useSelector(state => state.tab.tab)
  const dispatch = useDispatch()
  
  const isActive = useMemo(
    () => currentTab === tab,
    [currentTab, tab]
  )
  
  const onClick = useCallback(
    () => {
      if (isActive) return;
      dispatch(navigate(tab))
      dispatch(clearData())
    },
    [tab, isActive]
  )
    
  const className = useMemo(() => {
    return `nav-button ${tab} ${isActive ? 'active' : ''}`
  }, [isActive])
  
  return (
    <button
      onClick={onClick}
      className={className}
    />
  )
}