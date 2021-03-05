import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo } from '../redux/actions/userAction'
import Loader from './Loader'
import { Form, Button, Modal } from 'react-bootstrap'

const UpdateTodoModal = (props) => {

    const reduxState = useSelector(store => store)
    const { userRoot, errorRoot } = reduxState

    const [title, setTitle] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)

    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(updateTodo(props.todo.bucketId,{_id:props.todo.todo._id, title, isCompleted}))
    }

    useEffect(()=>{
        if(Object.keys(props.todo).length !== 0){
            setTitle(props.todo.todo.title)
            setIsCompleted( props.todo.todo.isCompleted)
        }
    },[props])

    useEffect(()=>{
        if(userRoot.success){
            props.setUpdateModal(false)
        }
    },[userRoot.success])




    return (
        <Modal show={props.updateModal} onHide={() => props.setUpdateModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>UPDATE TODO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formHandler}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Title</Form.Label>
                        {console.log("tottytretghtr0", title)}
                        <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Status</Form.Label>
                        <Form.Control onChange={(e)=>setIsCompleted(e.target.value)} as="select">
                            <option>Select</option>
                            <option value={true}>Completed</option>
                            <option value={false}>Need to work</option>
                        </Form.Control>
                    </Form.Group>

                    {userRoot.loader ? <Loader /> : <Button variant="primary" type="submit">
                        Submit
                </Button>}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default React.memo(UpdateTodoModal)
