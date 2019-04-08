import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Title.scss';

const copy = 'Mother Lugger'.split('');

class Title extends Component {
    render() {
        return (
            <div className='Title-root'>
                <div className='Title-bar top' />
                <span className='Title-copy h1'>
                    {copy.map((letter, i) => (
                        <Parallax
                            key={`copy-${i}`}
                            x={[-10 * (i - 6) + 'px', 10 * (i - 6) + 'px']}
                            className='Title-letter'
                        >
                            {letter}
                        </Parallax>
                    ))}
                </span>
                <div className='Title-bar bottom' />
            </div>
        )
    }
}

export default Title;