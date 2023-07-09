import './index.css'
import HomeLayout from './Layouts/HomeLayout'
import { Routes, Route } from 'react-router-dom';
import CategoriesList from './components/CategoriesList'
import Sidebar from './components/Sidebar'
import Container from '@mui/material/Container';
import ProductsList from './components/ProductsList';





function App() {
    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    display: 'flex',
                    margin: 0,
                    padding: 0,
                    height: '100vh',
                }} >
                <Sidebar></Sidebar>
                <Container maxWidth={false} sx={{ background: 'white', }}>
                    <Routes>
                        <Route path='/' element={<HomeLayout />} />
                        <Route path='/categories' element={<CategoriesList />} />
                        <Route path='/products' element={<ProductsList></ProductsList>} />
                    </Routes>
                </Container>
            </Container>
        </>
    )
}

export default App
