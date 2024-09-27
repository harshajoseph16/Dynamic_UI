import './button.css';

const Button= (props)=> {
    return (
<button
    ref={props.reference}
    onClick={props.onClick}
    className={`btn ${props.className}`}
    >
{props.name}
</button>
    )
}
export default Button;