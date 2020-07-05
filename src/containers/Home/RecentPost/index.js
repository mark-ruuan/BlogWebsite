/* eslint-disable */
import React from 'react'
import Card from '../../../components/UI/Card'
import { NavLink } from 'react-router-dom';
import './style.css'

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/memories-from.jpg')} alt="post Image" />
            </div>
            <div className="blogHeader">
                <span className="blogHead"> Featured </span>
                <h1 className="postTitle"> Fitness Mantra to live Feet</h1>
                <span className="postedBy">posted on 21 July, 2020  by blogger </span>
                <p className="content">Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evenin...</p>
                <div class="readText">
                    <NavLink to={`/post/1`}> Read More</NavLink>
                </div>
            </div>
        </Card>
            
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/memories-from.jpg')} alt="post Image" />
            </div>
            <div className="blogHeader">
                <span className="blogHead"> Featured </span>
                <h1 className="postTitle"> Fitness Mantra to live Feet</h1>
                <span className="postedBy">posted on 21 July, 2020  by blogger </span>
                <p className="content">Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evenin...</p>
                <div class="readText">
                    <NavLink to={`/post/1`}> Read More</NavLink>
                </div>
            </div>
        </Card>
    </div>
   )

 }

export default RecentPost