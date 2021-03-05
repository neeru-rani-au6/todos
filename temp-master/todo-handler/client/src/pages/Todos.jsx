import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col, Button, Card, CardColumns} from 'react-bootstrap'
import { getTodos } from '../redux/actions/userAction'
import {useHistory } from 'react-router-dom'
import TodosList from '../components/TodosList'
import AddTodoModal from '../components/AddTodoModal'


const Todos = (props)=>{

    console.log(props)

    const [todos, setTodos] = useState([])
    const dispatch = useDispatch()

    const [showAddTodoModal,setShowAddTodoModal] =  useState(false)

    useEffect(()=>{
        if(props.match.params.id){
            dispatch(getTodos(props.match.params.id))
        }
    },[props.match.params.id])

   

    return (
        <>

        <AddTodoModal bucketId={props.match.params.id} showAddTodoModal={showAddTodoModal} setShowAddTodoModal={setShowAddTodoModal} />

        <Button onClick={()=> setShowAddTodoModal(true)}  className="m-5"> ADD TODOS</Button>

        <TodosList bucketId={props.match.params.id}  />

        </>

    )
}

export default  Todos