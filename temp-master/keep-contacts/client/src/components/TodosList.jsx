import React, { useState } from 'react'
import { Form, Button, Table, Container, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../redux/actions/userAction'
import Loader from './Loader'

const TodosList = () => {
    const reduxData = useSelector(store=>store)
    const {userRoot, errorRoot} = reduxData
    return (
        <Container>
            <Row>
                <Col md={9}>
                <Table striped bordered hover>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Todo</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRoot.todos.map((todo, index)=>
                <tr key={todo._id}>
                    <td>{index + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.isCompleted.toString()}</td>
                    <td><Button>Update</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>)}
            </tbody>
        </Table>
                </Col>
            </Row>
        </Container>
        
    )
}

export default TodosList