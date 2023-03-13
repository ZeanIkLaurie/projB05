import './App.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'

function App() {
  return (
  <><Navbar /><Container>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Container></>
  )
}

export default App
