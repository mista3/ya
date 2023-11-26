import { decrement, increment, useDispatch, useSelector } from '../store'

export default function CounterPage() {
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch()

  const add = () => {
    dispatch(increment())
  }
  
  const subtract = () => {
    dispatch(decrement())
  }
  
  return <div className="page">
    <div className="counter-page">
      <div className="count">{count}</div>
      <div className="count-buttons">
        <button onClick={subtract}/>
        <button onClick={add}/>
      </div>
    </div>
  </div>
}