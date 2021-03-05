import React, { useState } from 'react'
import { Form, Button, Table, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../redux/actions/userAction'
import Loader from './Loader'
import UpdateTodoModal from '../components/UpdateTodoModal'
import DeleteTodoModal from '../components/DeleteTodoModal'

const TodosList = ({ bucketId }) => {
    const reduxData = useSelector(store => store)
    const { userRoot, errorRoot } = reduxData

    const [todo, setTodo] = useState({})

    const [updateModal, setUpdateModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const [deleteData, setDeleteData] = useState({})

    const updateClickHandler = (data) => {
        setTodo(data)
        setUpdateModal(true)
    }

    const deleteClickHandler = (data)=>{
        setDeleteData(data)
        setDeleteModal(true)
    }



    return (
        <>
           <DeleteTodoModal deleteData={deleteData} deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
            <UpdateTodoModal todo={todo} updateModal={updateModal} setUpdateModal={setUpdateModal} />
            <Container>
                <Row>
                    <Col md={9} className="m-auto">
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
                                {userRoot.todos.map((todo, index) =>
                                    <tr key={todo._id}>
                                        <td>{index + 1}</td>
                                        <td>{todo.title.toUpperCase()}</td>
                                        <td>{todo.isCompleted ? "Completed" : "Need To Work"}</td>
                                        <td><Button variant="secondary" onClick={() => updateClickHandler({ bucketId, todo: {_id: todo._id, title: todo.title, isCompleted: todo.isCompleted } })}>Update</Button></td>
                                        <td><Button variant="danger" onClick={() => deleteClickHandler({bucketId,todoId:todo._id})}  >Delete</Button></td>
                                    </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TodosList