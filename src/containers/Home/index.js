/* eslint-disable */
import React from 'react';
import Card from '../../components/UI/Card'
import Sidebar from '../../components/Sidebar'
import './style.css'

import RecentPost from './RecentPost';


const Home = props => {

    const gallaryHeight = 450
    const sideImageHeight = gallaryHeight / 3;
    return (
        <div>
            <Card>
                <div className="gallaryPost" >
                    <div className="imgContainer">
                        <img src ={require('../../blogPostImages/gray-bridge-and-trees.jpg')}alt="Main Image"/>
                    </div>
                    <div className="imgContainer">
                        <img src ={require('../../blogPostImages/dolphins-in-water.jpg')}alt="Side Image"/>
                    </div>
                    <div className="imgContainer">
                        <img src ={require('../../blogPostImages/snow-covered-mountain.jpg')}alt="Side Image"/>
                    </div>
                    <div className="imgContainer">
                        <img src ={require('../../blogPostImages/trees-in-park.jpg')}alt="Side Image"/>
                    </div>
                </div>
                
            </Card>

            <section className="HomeContainer">
                <RecentPost style={{width:'73%'}}/>
                
                < Sidebar />
                
            </section>
              
            
        </div>
    );
}

export default Home;