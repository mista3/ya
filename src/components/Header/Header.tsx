import NavButton from '../NavButton/NavButton';
import './Header.css'

export default function Header() {
  
  return (
    <div className="header">
      <NavButton tab='counter' />
      <NavButton tab='loader' />
      <NavButton tab='parallel' />
    </div>
  )
}