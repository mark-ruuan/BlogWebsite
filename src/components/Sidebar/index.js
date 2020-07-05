/* eslint-disable*/
import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import './style.css'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]) 
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span> About Us </span>
        </div>
        <div className="profileImageContainer">
          <img  src ="https://avatars0.githubusercontent.com/u/40922189?s=400&u=cc9c0239f6abfd508ede333a63f572617be9cca6&v=4" alt="About Us Image"/>
        </div>
        <div className="cardBody">
          <p className = "personalBio">Hey! I am Arun Kumar. I love reading novels and also I am foodie.</p>
        </div>
      </Card>
      <Card style={{marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span> Social Network</span>
        </div>
      </Card>
      <Card style={{marginBottom:'20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span> Recent Posts </span>
        </div>
        <div className="recentPosts">
          {
            posts.map(post => {
              return (
               
                  <div key={post.id}className="recentPost">
                     <NavLink to={`/post/${post.id}`}> {post.blogTitle} </NavLink>
                    
                    <span>{post.postedOn}</span>
                  </div>
                
                
              );
            })
          }  
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar