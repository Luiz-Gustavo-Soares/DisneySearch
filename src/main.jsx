import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import { Header } from './components/header'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
)
