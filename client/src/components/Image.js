import React from 'react';

import '../css/Image.css';

export class Image extends React.Component{

    constructor(){
        super();
        this.state = {
            img:''
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/file')
        .then((response)=>{
             return response.text();
        })
        .then((data)=>{
            console.log(data);
            this.setState({img:data});
        })
    }    

    render(){
        return (
            <div className="d-inline ml-4 mt-3 float-left">
                <img src={this.state.img} alt="" className="shadow rounded-circle" />
            </div>
        );
    }
}