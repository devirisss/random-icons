import './button.css';

const Button = ({handleClick}) => {

    return (
        <div className="button" onClick={handleClick}>
            <p>Show random icon</p>
        </div>
    )
}

export default Button;