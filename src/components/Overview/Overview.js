import React, { Component } from 'react';

import mom from '../../assets/images/young_mom.jpg';
import './Overview.scss';


class Overview extends Component {
    render() {
        return (
            <div className='Overview-root'>
                <div className="Overview-copy">
                    <img className="Overview-img" src={mom} alt="mom" />
                </div>
                <div className="Overview-copy">
                    <h1 className="Overview-title">My Mother</h1>
                </div>
                <p>From humble beginnings to the top of her class in motherhood</p>
            </div>
        )
    }
}

export default Overview;