import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = (props) => {
    // Récupère l'emplacement actuel (URL) de la page
    const location = useLocation();

    return (
        <header className="header">
            {/* Logo de l'entreprise */}
            <h1 className='logo'>{props.title}</h1>
            {/* Navigation contenant des liens vers différentes pages */}
            <nav>
                {/* Lien vers la page d'accueil */}
                <Link className='link' to="/">Accueil</Link>
                {/* Lien vers la page des produits */}
                <Link className='link' to="/products">Produits</Link>
            </nav>
            {/* Affiche un bouton "+" (Ajouter) ou "x" (Fermer) sur la page des produits */}
            {location.pathname === '/products' && (
                <Button 
                    text={props.showAdd ? 'x' : '+ Ajouter'} 
                    color={props.showAdd ? 'gray' : 'darkorange'}
                    onClick={props.onAddBtn}
                />
            )}
        </header>
    );
}

// Valeur par défaut pour le titre de l'entreprise
Header.defaultProps = {
    title: 'Super Pawn Shop'
}

// Validation des propriétés
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
