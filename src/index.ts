import './style.css'
import print from './print'

const root = document.querySelector('#root') as Element

root.innerHTML = 'text1'

const button = document.createElement('button')
button.innerText = 'click'
button.onclick = () => print('hello')

root.appendChild(button)