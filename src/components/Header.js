import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = (props) => {
    // const onClick = () => {
    //     console.log('Click component')
    // }

    const location = useLocation()
    return(
        <header className="header">
            {/*<h1 style={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1>*/}
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1 className='logo'>{props.title}</h1>
            <nav>
                <Link className='link' to="/">Accueil</Link>
                <Link className='link' to="/products">Produits</Link>
            </nav>
            {/*<button className='btn'>Ajouter</button>*/}
            {/* <Button text="Ajouter" color="green" onClick={onClick}/> */}

            {location.pathname === '/products' && (
                <Button 
                    text={props.showAdd ? 'x' : '+ Ajouter'} 
                    color={props.showAdd ? 'gray' : 'darkorange'}
                    onClick={props.onAddBtn}/>
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Super Pawn Shop'
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