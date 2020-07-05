/* eslint-disable */
import React from 'react';
import Card from '../../components/UI/Card'
import './style.css'

import RecentPost from './RecentPost';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';


const GallaryImage = props => {
    const x = '../../blogPostImages/gray-bridge-and-trees.jpg'
    return (
        <div className="imgContainer">
            <img src={require(`../../blogPostImages/${props.src}`)}alt="Main Image"/>
    <div className="text"><p> {props.category}</p></div>
            
        </div>
    );
}

const Home = props => {

    const Ar = blogData.gallaryImage;

    return (
        <div>
            <Card>
                <div className="gallaryPost" >
                    {
                        Ar.map(image => 
                            <GallaryImage 
                                key={image.id}
                                src={image.image}
                                category={image.category}
                            />
                        )
                    }
                </div>
                
            </Card>
            <Layout>
                <RecentPost style={{width:'73%'}}/>
            </Layout> 
        </div>
    );
}

export default Home;