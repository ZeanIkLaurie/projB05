import { Container, Nav, Navbar as NavBS} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <NavBS className='mb-3 bg-dark' variant='dark'>
            <Container>
                <Nav className='justify-content-end'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                </Nav>
                G
            </Container>
        </NavBS>
    )
}