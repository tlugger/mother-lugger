import React, { Component } from 'react';

import grandmom from '../../assets/images/grandma.svg'
import aunt from '../../assets/images/aunt.svg';
import gfmom from '../../assets/images/gfmom.svg';
import './Mentions.scss';


class Mentions extends Component {
    render() {
        return (
            <div className='Mentions-root'>
                <h1>Honorable Motherhood Mentions</h1>
                <span className="Mentions-copy">
                    <div className="Mentions-container">
                        <img className="Mentions-svg" src={aunt} alt="aunt" />
                        <h3>My Aunt</h3>
                        <p>My mom away from mom.</p>
                    </div>
                    <div className="Mentions-container">
                        <img className="Mentions-svg" src={grandmom} alt="grandmom" />
                        <h3>My Grandmother</h3>
                        <p>The mother of all mothers.</p>
                    </div>
                    <div className="Mentions-container">
                        <img className="Mentions-svg" src={gfmom} alt="gfmom" />
                        <h3>My Girlfriends Mom</h3>
                        <p>A mother not unlike my own.</p>
                    </div>
                </span>
            </div>
        )
    }
}

export default Mentions;