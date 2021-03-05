import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBucket } from '../redux/actions/userAction'
import Loader from './Loader'
import {Form, Button, Modal} from 'react-bootstrap'

const AddBucket = ({ addBucketModal, setAddBucketModal }) => {

    const reduxState = useSelector(store => store)
    const { userRoot, errorRoot } = reduxState

    const [name, setName] = useState("")

    console.log("sdfdsa", userRoot)
    
    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addBucket({ name}))
        setName("")
    }

    useEffect(()=>{
        if(userRoot.success){
            setAddBucketModal(false)
        }
    },[userRoot.success])


    return (
        <Modal show={addBucketModal} onHide={()=>setAddBucketModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>ADD BUCKET</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formHandler}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    {userRoot.loader ? <Loader /> : <Button variant="primary" type="submit">
                        Submit
                </Button>}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddBucket
