import React from 'react'
import Boundingbox  from 'react-bounding-box'
import './Main.css';

class CustomBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            showboundingboxes: false,
            image: '',
            style: {
              maxWidth: '100%',
              maxHeight: '90vh'
            },         
              box:[],
              boxes :[],
                     
              colors: {
                  normal: '#ffcc66',
                  selected: '#99cc00',
                  unselected: '#ffff99'
                        },
              
              coordinates:{
                xCoordinates:'',
                yCoordinates:'',
              }
              
        }
    }
    defaultLoad=()=>{
      //manually draw the bounding box without react bounding box
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var img = document.getElementById("target");
            img.style.display = "none"
            ctx.drawImage(img, 0, 0);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(30, 20, 150, 150);
          
    }
    onPhotoChange = event => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = e => {
            this.setState({ 
                image: e.target.result
            } );
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      };
      CoordinatesControl = event => {
        let boxes = this.state.box;
    
        boxes[parseInt(event.target.name)] = event.target.value;
    
        this.setState({
        
               boxes : [boxes]
        
        });
        console.log(boxes);
      };
      ClickEvent = () => {
       this.setState({
           showboundingboxes: true
       })
      };
      
    render(){
        return(
            <div className="customboxContainer">
                 <div className="inputPhoto">
          <span>
            <input
              type="file"
              onChange={this.onPhotoChange}
              className="filetype"
              id="single"
            />
          </span>
        </div>
        <div className="firstCord">
          {" "}
          X1 :{" "}
          <input type="number" name="0" onChange={this.CoordinatesControl} />
          Y1 :{" "}
          <input
            type="number"
            name="1"
            onChange={this.CoordinatesControl}
          />{" "}
        </div>
        <div className="secondCord">
          {" "}
          X2 :{" "}
          <input type="number" name="2" onChange={this.CoordinatesControl} />
          Y2 :{" "}
          <input
            type="number"
            name="3"
            onChange={this.CoordinatesControl}
          />{" "}
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary submitButton"
            onClick={this.ClickEvent}
          >
            Generate Image
          </button>
        </div>
        {this.state.showboundingboxes ?  <Boundingbox id="custom" image={this.state.image} onSelected={this.showCoordinates}
             boxes={this.state.boxes}
             colors={this.state.colors}
             style={this.state.style}
            /> : ''}
        
        
          {/* <canvas id="myCanvas" width="1000" height="1000" /> 
       <img id="target" src={this.props.image} alt="" onClick={this.handleLoad} />  */}
            </div>
        )
    }
}

export default CustomBox
