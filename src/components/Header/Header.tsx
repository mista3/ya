import { tabs } from 'helpers';
import NavButton from '../NavButton/NavButton';
import './Header.css'

export default function Header() {
  
  return (
    <div className="header">
      {tabs.map((tab) => (
        <NavButton tab={tab} key={tab}/>
      ))}
    </div>
  )
}