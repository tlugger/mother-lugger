import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Title.scss';


const copy = 'Mother Lugger'.split('');
console.log(copy.length)

class Title extends Component {
    render() {
        return (
            <div className='Title-root'>
                <div className='Title-bar top' />
                <span className='Title-copy h1'>
                    {copy.map((letter, i) => (
                        <Parallax
                            key={`copy-${i}`}
                            x={[0, 100* (i-6)]}
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