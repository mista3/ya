import { useCallback, useMemo } from 'react';
import { navigate, useDispatch, useSelector } from '../store';
import { Tab } from '../types';

export default function NavButton({ tab } : { tab: Tab }) {
  const currentTab = useSelector(state => state.tab.tab)
  const dispatch = useDispatch()

  const onClick = useCallback(
    () => dispatch(navigate(tab)),
    [tab]
  )

  const isActive = useMemo(
    () => currentTab === tab,
    [currentTab, tab]
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