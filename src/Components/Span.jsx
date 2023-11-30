import { useState } from "react";


function Span(props) {

    const [isHover, setHover] = useState(false);

    const mouseEnter = () => {
        setHover(true)
    }

    const mouseLeave = () => {
        setHover(false)
    }

    const changeColor = () => {
        document.querySelector('#root').style.backgroundColor = props.colorName;
    }
    
    return (
        <span style={{
            borderRadius: '30px',
            textTransform: 'capitalize',
            display: 'inline-block',
            backgroundColor: props.colorName,
            opacity: isHover ? 0.7 : 1,
            color: props.textColor,
            padding: '5px 15px',
            margin: '2px 5px',
            cursor: 'pointer'
        }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={changeColor}
        >{props.colorName}</span>
    );
}

export default Span;