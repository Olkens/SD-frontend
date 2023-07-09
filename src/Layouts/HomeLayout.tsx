import Container from '@mui/material/Container';
import CategoriesList from '../components/CategoriesList'
import CssBaseline from '@mui/material/CssBaseline';



export default function HomeLayout() {



    return (
        <>
            <CssBaseline></CssBaseline>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    display: 'flex',
                    margin: 0,
                    padding: 0,
                    height: '100vh',
                }} >
                <Container maxWidth={false} sx={{ background: 'white', }}>
                    <CategoriesList></CategoriesList>
                </Container>
            </Container>
        </>
    )
}