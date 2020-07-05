/* eslint-disable */
import React from 'react'
import Card from '../../../components/UI/Card'
import { NavLink } from 'react-router-dom';
import './style.css'
import postData from '../../../data/blog.json'

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  const dataAr = postData.data;
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require(`../../../blogPostImages/${dataAr[4].blogImage}`)} alt="post Image" />
            </div>
            <div className="blogHeader">
                <span className="blogHead"> {dataAr[4].blogCategory} </span>
                <h1 className="postTitle"> {dataAr[4].blogTitle}</h1>
                <span className="postedBy">posted on {dataAr[4].postedOn}  by {dataAr[4].author} </span>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                <div className="readText">
                    <NavLink to={`/post/4`}> Read More</NavLink>
                </div>
            </div>
        </Card>
            
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require(`../../../blogPostImages/${dataAr[2].blogImage}`)} alt="post Image" />
            </div>
            <div className="blogHeader">
                <span className="blogHead"> {dataAr[2].blogCategory}  </span>
                <h1 className="postTitle"> {dataAr[2].blogTitle}</h1>
                <span className="postedBy">posted on {dataAr[2].postedOn}  by {dataAr[2].author} </span>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                <div className="readText">
                    <NavLink to={`/post/3`}> Read More</NavLink>
                </div>
            </div>
        </Card>
    </div>
   )

 }

export default RecentPost