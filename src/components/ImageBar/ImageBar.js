import React, { Component } from 'react';

import mom from '../../assets/images/mom.svg'
import grandmom from '../../assets/images/grandma.svg'
import aunt from '../../assets/images/aunt.svg';
import gfmom from '../../assets/images/gfmom.svg';
import './ImageBar.scss';


class ImageBar extends Component {
    render() {
        return (
            <div className='ImageBar-root'>
                <span className="ImageBar-copy">
                    <img className="ImageBar-svg" src={mom} alt="mom" />
                    <img className="ImageBar-svg" src={aunt} alt="aunt" />
                    <img className="ImageBar-svg" src={grandmom} alt="grandmom" />
                    <img className="ImageBar-svg" src={gfmom} alt="gfmom" />
                </span>
            </div>
        )
    }
}

export default ImageBar;