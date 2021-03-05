import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteTodo } from '../redux/actions/userAction'
import { useSelector, useDispatch } from 'react-redux'



const DeleteTodoModal = ({deleteData ,deleteModal, setDeleteModal }) => {
    const reduxState = useSelector(store => store)
    const { userRoot, errorRoot } = reduxState
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(deleteTodo(deleteData.bucketId, deleteData.todoId))
    }

    useEffect(()=>{
        if(userRoot.success){
            setDeleteModal(false)
        }
    },[userRoot.success])
    
    return (
        <Modal show={deleteModal} onHide={() => setDeleteModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>DELETE TODO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Are your sure want to delete ?</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={clickHandler}>
                    Yes
                </Button>
                <Button variant="secondary" onClick={() => setDeleteModal(false)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>

    )

}


export default DeleteTodoModal