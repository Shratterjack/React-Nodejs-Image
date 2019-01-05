import React from 'react';

import '../css/ImageDetail.css';

export class ImageDetail extends React.Component{

    constructor(){
        super();

        this.state={
            imageName:''
        }
    }

    componentDidMount(){
          
        fetch('http://localhost:3001/filename')
        .then((response)=>{
             return response.json();
        })
        .then((data)=>{
            console.log(data);
            this.setState({imageName:data});
        })
    }

    render(){
        return (
            <div className="d-block ml-4 mt-3 float-left">
            <p className="imgame">{this.state.imageName}</p>
            <small>Japan</small>
            </div>          
        );
    }
}