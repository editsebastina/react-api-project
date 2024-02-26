import React, {useEffect, useState }from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/conf'
import Container from '../components/Container'
import PostForm from '../components/post-form/PostForm'


function EditPost() {
  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(slug){
      appwriteService.getpost(slug).then((post) => {
        if(post) {
          setPost(post)
        } else {
          navigate('/') // or /404
        }
      })
    }
  }, [slug, navigate])


  return (
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost