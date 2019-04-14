import React, { Component } from 'react';

import mom from '../../assets/images/mom.svg';
import './Overview.scss';


class Overview extends Component {
    render() {
        return (
            <div className='Overview-root'>
                <span className="Overview-copy">
                    <img className="Overview-svg" src={mom} alt="mom" />
                    <h1 className="Overview-title">My Mother</h1>
                </span>
                <p>From humble beginnings to the top of her class in motherhood</p>
            </div>
        )
    }
}

export default Overview;