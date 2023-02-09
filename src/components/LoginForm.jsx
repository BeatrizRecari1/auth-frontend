
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"

export default function LoginForm() {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        // make a post request to the API with the form data
        
        fetch("https://auth-api-br.web.app/signup", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
        },
            body: JSON.stringify({email, password}),
        })
        // create a new user in the database
        // then ...
        .then(res => res.json())
        .then(response => {
             // 1. do something with the new user
            setUser(response.user)
             // 2. redirect to the content page
            navigate('/secret')
        })
        .catch(err => alert(err.message))
       
       
       

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <Form.Group>
                <p className='text-light'>Sign Up To Continue To Coachella Festival</p>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                name="email"
                value={email}
                placeholder='Enter Email'
                type="email" 
                className="p-3 hover-effect"
                onChange={e => setEmail(e.target.value)} 
              />
            
        
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    value={password}
                    placeholder='Password'
                    type="password"
                    className="p-3 hover-effect"
                    onChange={ e => setPassword(e.target.value)}
                     />
            
            </Form.Group>

                <Button
                    variant='outline-light'
                    type='submit'
                    size="lg" 
                    className='mt-3 hover-effect' >Submit</Button>
               
                 
        </form>
        </>
    )
}
