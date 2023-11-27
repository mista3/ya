import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store'
import App from './App'

const root = createRoot(document.getElementById('app')!)
root.render(
  <Provider store={store}>
      <App />
  </Provider>
)