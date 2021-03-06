import React from 'react';

const Colour = (props) => {
    const { hex, name, rgb } = props.col
    return (
            <div>
                <div className="colour__sample" style={{backgroundColor: hex}}></div>
                <span className="colour__hex">{hex}</span>
                <span className="colour__rgb">{rgb}</span>
            </div>

    )
}

export default Colour;