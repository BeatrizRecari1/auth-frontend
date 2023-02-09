import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from "../components/Header"
import SignupForm from "../components/SingupForm"


export default function Signup() {
    return (
   
    <Container className='p-5 custom-login-form'>
        <Row>
            <Col><Header title="Sign Up" /></Col>
        </Row>

        <Row>
            <Col><SignupForm /></Col>
        </Row>
        <Row>
        <Col><Link to="/login" className='text-light pr-3 d-block'>Already a member? Then sign up Boo!</Link></Col>
        </Row>
    </Container>
    
        )
    }