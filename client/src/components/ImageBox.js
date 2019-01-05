import React from 'react';

import { Image } from "./Image";
import { ImageDetail } from "./ImageDetail";
import '../css/ImageBox.css';

export class ImageBox extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="shadow bg-white  details">
                 
                        <Image />
                        <ImageDetail/>
                        <div className="d-inline float-right mt-3 mr-4">
                            <span className="rupee-style  mr-2">
                                <i className="fas fa-rupee-sign"></i>
                            </span>
                            <span className="amount">4,440</span>
                            <p className="small ml-5">25/11/18 </p>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}