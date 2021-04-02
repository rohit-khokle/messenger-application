import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function Login({ onIdSubmit }) {
    const idRef = useRef();

function handleSubmit(e) {
    e.preventDefault(); // Stops from refreshing the page

    onIdSubmit(idRef.current.value);

}

return (
        <Container class="align-items-center d-flex" style={{ height: '100vh'
        
        }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label> Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef}></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary"> Create a New Id</Button>
            </Form>
        </Container>
    )
}
