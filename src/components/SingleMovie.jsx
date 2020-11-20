import React, { Component } from "react";
export default class SingleMovie extends Component {




  render() {
    return (
      <img src={this.props.obj.Poster} className="img-fluid"alt="" style={{width:"11rem",height:"10rem"}}/> 


    )
    
   
  }
}
