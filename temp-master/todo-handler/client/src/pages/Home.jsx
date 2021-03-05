import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col, Button, Card, CardColumns} from 'react-bootstrap'
import AddBucket from '../components/Addbucket'
import { getBuckets } from '../redux/actions/userAction'
import {useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
import DeleteBucketModal from '../components/DeleteBucketModal'


const Home = () => {
    const reduxState = useSelector(store => store)
    const dispatch = useDispatch()
    const history = useHistory()

    const {userRoot, errorRoot} = reduxState

    const [user, setUser] = useState({})
    const[userId, setUserId] = useState("")

    const [addBucketModal, setAddBucketModal] = useState(false)

    const [logoutModal, setLogoutModal] = useState(false)

    const [deleteModal, setDeleteModal] = useState(false)

    const [bucketId, setBucketId] = useState("")


    //GET LIST OF ALL USER
    useEffect(() => {
        if (!userRoot.isAuthenticated) {
           history.push('/')
        }
        else {
            dispatch(getBuckets())
        }
    }, [])


    const clickHandler = (data)=>{
        setBucketId(data)
        setDeleteModal(true)
    }

    
 
  

    return (
        <>
             <DeleteBucketModal bucketId={bucketId} deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
            <AddBucket addBucketModal={addBucketModal} setAddBucketModal={setAddBucketModal}  />


           
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={8}>
                    <h2>List of Buckets</h2>

                </Col>
                <Col xs={12} md={4}>
                  <Button variant="primary" onClick={()=>setAddBucketModal(true)}>Add Bucket</Button>
                    </Col>
                    
                </Row>
                
                <CardColumns className="mt-5">
                    {userRoot.buckets.length !== 0 ? userRoot.buckets.map(bucket =>
                        <Card key={bucket._id}>
                            <Card.Body>
                                <Card.Title className="text-center">{bucket.name}</Card.Title>
                                <Card.Title>Todos: {bucket.todos.length}</Card.Title>
                                <Card.Footer>
                                    <Link to={`/todos/${bucket._id}`} variant="primary">
                                        TODOS
                                    </Link>
                                    <Button onClick={()=>clickHandler(bucket._id)} variant="danger" className="float-right">
                                        DELETE
                                    </Button> 
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    ): "No users to show kindly add"}
                    </CardColumns>
            </Container>
            </>
    )
}

export default Home
