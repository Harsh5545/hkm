import react from 'react'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
    </>
  )
}

export default App
