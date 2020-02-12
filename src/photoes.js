import React from 'react'
import Boundingbox  from 'react-bounding-box'
import './Main.css';

const params = {
    boxes: [
      //[x1, y1, x2, y2]
      [0, 0, 250, 250],
      [300, 0, 250, 250],
    ],
    options: {
      colors: {
        normal: 'rgba(255,225,255,1)',
        selected: 'rgba(0,225,204,1)',
        unselected: 'rgba(100,100,100,1)'
      },
      style: {
        maxWidth: '100%',
        maxHeight: '90vh',
        width: '400px',
        height: '300px'
      }
    }
  };

class Photoes extends React.Component {   
    render() {
      return (
        <div className="photoesGallery"> 
         <Boundingbox image={this.props.value} alt={this.props.key} boxes={params.boxes}
             options={params.options}/>
        </div>
      );
    }
  }

export default Photoes 