import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import tyler from "../../assets/images/tyler.jpeg";
import sydney from "../../assets/images/sydney.jpeg";
import ski from "../../assets/images/ski.jpg";
import disney from "../../assets/images/disney.jpg";
import four_corners from "../../assets/images/four_corners.jpg";
import './Kids.scss';


class Kids extends Component {
    
    render() {
        const isMobile = window.innerWidth < 760;
        const parallaxX = isMobile ? [-10, 20] : [0, 0]
        const parallaxY = isMobile ? [0, 0] : [-20, 30]
        const parallaxX2 = isMobile ? [20, -10] : [0, 0]
        const parallaxY2 = isMobile ? [0, 0] : [30, -20]
        return (
            <div className='Kids-root'>
                <div className="Kids-copy">
                    <img className="Kids-img" src={tyler} alt="tyler" />
                    <img className="Kids-img" src={sydney} alt="sydney" />
                </div>
                <div className="Kids-copy">
                    <h1 className="Kids-title">Motherhood begins</h1>
                </div>
                <p>This mom went ahead and had not one, not three, but TWO whole kids all on her own.</p>
                <div className="Kids-img-container">
                    <span>
                        <Parallax x={parallaxX} y={parallaxY}>
                            <img className="Kids-fam" src={ski} alt="ski" />
                        </Parallax>
                    </span>
                    <span>
                        <Parallax x={parallaxX2} y={parallaxY2}>
                            <img className="Kids-fam" src={disney} alt="disney" />
                        </Parallax>
                    </span>
                    <span>
                        <Parallax x={parallaxX} y={parallaxY}>
                            <img className="Kids-fam" src={four_corners} alt="four_corners" />
                        </Parallax>
                    </span>
                </div>
            </div>
        )
    }
}

export default Kids;