import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Yt from './pages/Yt'
import Terms from './pages/Terms'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/terms" element={<Terms></Terms>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
