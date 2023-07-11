import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About/About'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App(): JSX.Element {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
