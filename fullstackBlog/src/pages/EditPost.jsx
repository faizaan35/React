import React , {useState , useEffect}from 'react'
import { Container , PostForm } from '../components'
import service from '../appwrite/config'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
        else {
            navigate('/')
        }
    },[slug , navigate])
  return post ? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost