import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userAction'
import Loader from './Loader'



const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()
    const dispatch = useDispatch()
    const reduxState = useSelector(store=>store.userRoot)

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(userLogin({email, password}, history))
    }

    return (
        <div>
            <Form onSubmit={formHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                </Form.Group>
                {reduxState.loader ? <Loader /> : <Button variant="primary" type="submit">
                    Login
                </Button>}
            </Form>
        </div>
    )
}

export default LoginForm
