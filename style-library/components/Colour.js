


const Colour = (props) => {
    const { hex, name, rgb } = props.col
    console.log(hex)
    return (
            <div>
                <div className="colour__sample" style={{backgroundColor: hex}}></div>
                <span className="colour__hex">{hex}</span>
                <span className="colour__rgb">{rgb}</span>
            </div>

    )
}

export default Colour;