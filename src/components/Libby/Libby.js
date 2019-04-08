import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import libby from '../../assets/images/libby.jpg'
import paws from '../../assets/images/paws.svg';
import angel from '../../assets/images/angel.svg';
import './Libby.scss';


class Libby extends Component {
    render() {
        return (
            <div className='Libby-root'>
                <span className='Libby-copy h1'>
                    Gone But Not Forgotten
                </span>
                <span className="Libby-copy">
                    <img className="Libby-svg--left" src={paws} alt="paws" />
                    <Parallax x={[-20, 20]}>
                        <img className="Libby-img" src={libby} alt="libby" />
                    </Parallax>
                    <img className="Libby-svg--right" src={angel} alt="angel" />
                </span>
            </div>
        )
    }
}

export default Libby;