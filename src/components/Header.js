import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {
    const onClick = () => {
        console.log('Click component')
    }

    return(
        <header className="header">
            {/*<h1 style={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1>*/}
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1>{props.title}</h1>
            {/*<button className='btn'>Ajouter</button>*/}
            <Button text="Ajouter" color="green" onClick={onClick}/>        </header>
    )
}

Header.defaultProps = {
    title: 'Product Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
/*
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/
export default Header