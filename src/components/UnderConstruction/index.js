import React from 'react'
import Card from '../UI/Card'
import './style.css'

/**
* @author
* @function UnderConstruction
**/

const UnderConstruction = (props) => {
  return(
    <div style={props.style}>
      <Card>
        
          <div className="imageContainer">
              <img src={require('../../blogPostImages/under-construction-signage-on-laptop-keyboard.jpg')} alt="under construction" />
          </div>
      </Card>
    </div>
   )

 }

export default UnderConstruction