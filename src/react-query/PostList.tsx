import React from 'react'
import usePosts from './hooks/usePosts';


function PostList() {

    const {data , error, isLoading} = usePosts();
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>
  return (
    <>
    <select className="form-select mb-3">
        <option value="">User 1</option>
        <option value="1">User 2</option>
        <option value="2">User 3</option>
        <option value="3">User 4</option>
    </select>
    <ul className='list-group'>
      { data?.map(post => (<li className='list-group-item' key={post.id}>{post.title}</li>))}
    </ul>
    </>
  )
}

export default PostList
