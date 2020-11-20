import React, { Component } from "react";
export default class SingleMovie extends Component {




  render() {
    return (
      <img src={this.props.obj.Poster} className="img-fluid"alt="" srcset="" style={{width:"18rem",height:"15rem"}}/> 


    )
    
   
  }
}
