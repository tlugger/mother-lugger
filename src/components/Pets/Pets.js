import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import justice from '../../assets/images/justice_fat.jpg'
import tiny_justice from '../../assets/images/tiny_justice.jpg'
import libby from '../../assets/images/libby-spooked.jpeg'
import zeus from '../../assets/images/zeus-young.jpg';
import luna from '../../assets/images/luna.jpg';
import './Pets.scss';


class Pets extends Component {
    render() {
        return (
            <div className='Pets-root'>
                <h1>A Mother to All</h1>
                <div>
                    <span className="Pets-copy">
                        <span className="Pets-img-container">
                            <img className="Pets-img" src={justice} alt="justice" />
                        </span>
                        <span className="Pets-img-container">
                            <img className="Pets-img" src={libby} alt="libby" />
                        </span>
                        <span className="Pets-img-container">
                            <img className="Pets-img" src={zeus} alt="zeus" />
                        </span>
                        <span className="Pets-img-container">
                            <img className="Pets-img" src={luna} alt="luna" />
                        </span>
                    </span>
                </div>
                <p>Mother to her children and our many pets. This mom just can't stop!</p>
                <Parallax y={[-5, 20]}>
                    <img className="Pets-cover" src={tiny_justice} alt="tiny_justice" />
                </Parallax>
            </div>
        )
    }
}

export default Pets;