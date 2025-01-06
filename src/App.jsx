import './App.css'
import {TicketDashboard} from './Pages/TicketDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Pages/SocialMedia'

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TicketDashboard />} />
            <Route path='/social' element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
