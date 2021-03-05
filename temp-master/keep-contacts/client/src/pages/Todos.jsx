import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col, Button, Card, CardColumns} from 'react-bootstrap'
import { getTodos } from '../redux/actions/userAction'
import {useHistory } from 'react-router-dom'
import TodosList from '../components/TodosList'


const Todos = (props)=>{

    const [todos, setTodos] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if(props.match.params.id){
            dispatch(getTodos(props.match.params.id))
        }
    },[props.match.params.id])
    return (
        <>

        <Button  className="m-5"> ADD TODOS</Button>

        <TodosList />

        </>

    )
}

export default  Todos