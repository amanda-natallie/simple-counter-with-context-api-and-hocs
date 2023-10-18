import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app'
import { StateProvider, ValueProvider } from 'contexts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider>
      <ValueProvider>
        <App />
      </ValueProvider>
    </StateProvider>
  </React.StrictMode>,
)
