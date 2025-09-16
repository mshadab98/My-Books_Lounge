import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {BookProvider} from './context/BookContext.jsx'

createRoot(document.getElementById('root')).render(
  <BookProvider>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
  </BookProvider>
  
  
)
