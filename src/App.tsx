import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import About from './pages/About/About'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function App(): JSX.Element {

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
