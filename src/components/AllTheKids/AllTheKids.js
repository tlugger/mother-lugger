import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import zoo from "../../assets/images/four_zoo.jpg";
import aquarium from "../../assets/images/four_aquarium.jpg"
import vacation from "../../assets/images/four_vacation.jpg"
import swimming from "../../assets/images/four_swimming.jpg"
import './AllTheKids.scss';


class AllTheKids extends Component {
    
    render() {
        const isMobile = window.innerWidth < 760;
        const parallaxX2 = isMobile ? [-10, 20] : [0, 0]
        const parallaxY2 = isMobile ? [0, 0] : [-20, 30]
        const parallaxX = isMobile ? [20, -10] : [0, 0]
        const parallaxY = isMobile ? [0, 0] : [30, -20]
        return (
            <div className='AllTheKids-root'>
                <p className="AllTheKids-title">The women responsible for this weird group</p>
                <div className="AllTheKids-img-container">
                    <span>
                        <Parallax x={parallaxX} y={parallaxY}>
                            <img className="AllTheKids-fam" src={zoo} alt="zoo" />
                        </Parallax>
                    </span>
                    <span>
                        <Parallax x={parallaxX2} y={parallaxY2}>
                            <img className="AllTheKids-fam" src={aquarium} alt="aquarium" />
                        </Parallax>
                    </span>
                    <span>
                        <Parallax x={parallaxX} y={parallaxY}>
                            <img className="AllTheKids-fam" src={vacation} alt="four_corners" />
                        </Parallax>
                    </span>
                    <span>
                        <Parallax x={parallaxX2} y={parallaxY2}>
                            <img className="AllTheKids-fam" src={swimming} alt="swimming" />
                        </Parallax>
                    </span>
                </div>
            </div>
        )
    }
}

export default AllTheKids;