import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const TopBar = (props) => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Dad Jokes</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl type='text' defaultValue={props.searchTerm} name='term' placeholder='Search' className='mr-sm-2' />
                <Button type='submit' variant='light'>Search</Button>
            </Form>
        </Navbar>
    )
}

export default TopBar