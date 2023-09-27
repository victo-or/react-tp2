import React, { useState } from 'react';
import Button from './Button';

const SingleProduct = ({ product, onDelete, onUpdate }) => {

  const [isEditing, setIsEditing] = useState(false);
  
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleUpdate = () => {
    // Vous pouvez implémenter ici la logique pour mettre à jour le produit
    // en utilisant "updatedProduct" qui contient les modifications.
    // Une fois la mise à jour terminée, vous pouvez appeler setIsEditing(false)
    // pour revenir à l'affichage normal du produit.
  };

  return (
    <div className="product">
      {isEditing ? (
        <div className="input">
          <input
            type="text"
            value={updatedProduct.nom}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, nom: e.target.value })}
          />
          <input
            type="text"
            value={updatedProduct.description}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
          />
          <input
            type="number"
            value={updatedProduct.prix}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, prix: e.target.value })}
          />
          {/* Ajoutez des champs pour les autres propriétés du produit ici */}
          <Button text="Enregistrer" color="green" onClick={handleUpdate} />
        </div>
      ) : (
        <div>
          <h3>
            {product.nom}
            <Button text="Effacer" color="red" onClick={() => onDelete(product.id)} />
          </h3>
          <p>{product.description}</p>
          <p>{product.prix}</p>
          <p>
            {product.categorie}
            <Button text="Modifier" color="green" onClick={() => setIsEditing(true)} />
          </p>
        </div>
      )}
    </div>
  );
  
};

export default SingleProduct;
