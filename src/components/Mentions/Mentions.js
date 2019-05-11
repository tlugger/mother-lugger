import React, { Component } from 'react';

import grandmom from '../../assets/images/grandma_blink.jpg'
import aunt from '../../assets/images/young_vic.jpg';
import jenny from '../../assets/images/jenny-perm.jpeg';
import './Mentions.scss';


class Mentions extends Component {
    render() {
        return (
            <div className='Mentions-root'>
                <h1>Honorable Motherhood Mentions</h1>
                <span className="Mentions-copy">
                    <div className="Mentions-container">
                        <img className="Mentions-jpg" src={aunt} alt="aunt" />
                        <h3 className="Mentions-title">My Aunt</h3>
                        <p>My mom away from mom.</p>
                    </div>
                    <div className="Mentions-container">
                        <img className="Mentions-jpg" src={grandmom} alt="grandmom" />
                        <h3 className="Mentions-title">My Grandmother</h3>
                        <p>The mother of all mothers.</p>
                    </div>
                    <div className="Mentions-container">
                        <img className="Mentions-jpg" src={jenny} alt="jenny" />
                        <h3 className="Mentions-title">My Girlfriends Mom</h3>
                        <p>A mother not unlike my own.</p>
                    </div>
                </span>
            </div>
        )
    }
}

export default Mentions;