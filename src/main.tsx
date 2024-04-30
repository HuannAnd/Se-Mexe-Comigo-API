import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import './styleguide.css'

import Providers from './contexts/Providers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
    <App />
    </Providers>
  </React.StrictMode>,
)
