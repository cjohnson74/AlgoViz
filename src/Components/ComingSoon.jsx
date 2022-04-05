import React, { Component } from 'react';
import algoVizImg from "../images/algovizimage.jpeg";
import underConstruction from "../images/under-construction.jpeg";


export default class ComingSoon extends Component {
  render() {
    return (
        <div>
            <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={algoVizImg} alt="" />
        </div>
    )
  }
}
