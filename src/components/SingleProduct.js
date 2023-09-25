// import { FaTimes } from 'react-icons/fa'
import Button from './Button'
const SingleProduct = ({product, onDelete, onToggle}) => {
    return(
        <div className={`product ${product.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToggle(product.id)}>
            <h3>{product.nom}
                <Button
                text="Effacer"
                color="red"
                onClick = { () => onDelete(product.id) }
                />
            </h3>
            <p>{product.description}</p>
            <p>{product.prix}</p>
            <p>{product.categorie}</p>
        </div>
    )
}

export default SingleProduct