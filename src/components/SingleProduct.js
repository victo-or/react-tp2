import React, { useState } from 'react';
import Button from './Button';

const SingleProduct = ({ product, onDelete, onUpdate }) => {

  const [isEditing, setIsEditing] = useState(false);
  
  // const [updatedProduct, setUpdatedProduct] = useState({ ...product });

	const [updatedNom, setUpdatedNom] = useState(product.nom);
  const [updatedDescription, setUpdatedDescription] = useState(product.description);
  const [updatedPrix, setUpdatedPrix] = useState(product.prix);
  const [updatedCategorie, setUpdatedCategorie] = useState(product.categorie);

  // const handleUpdate = () => {
  //   // Vous pouvez implémenter ici la logique pour mettre à jour le produit
  //   // en utilisant "updatedProduct" qui contient les modifications.
  //   // Une fois la mise à jour terminée, vous pouvez appeler setIsEditing(false)
  //   // pour revenir à l'affichage normal du produit.
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!updatedNom || !updatedDescription || !updatedPrix || !updatedCategorie) {
        alert('Please fill in all fields');
        return;
    }
    onUpdate({
			id: product.id,
			nom: updatedNom, 
			description: updatedDescription, 
			prix: updatedPrix, 
			categorie: updatedCategorie });
    // setUpdatedNom(updatedNom);
    // setUpdatedDescription(updatedDescription);
    // setUpdatedPrix(updatedPrix);
    // setUpdatedCategorie(updatedCategorie);
		setIsEditing(false)
	}

  return (
    <div className="product">
      {isEditing ? (
        <form onSubmit={onSubmit}>
					<div className="input form-control">
						<Button text="x" color="gray" onClick={() => setIsEditing(false)} />
						<label>
              Nom
							<input
								type="text"
								value={updatedNom}
								onChange={(e) => setUpdatedNom(e.target.value)}
							/>
						</label>
						<label>
              Description
							<input
								type="text"
								value={updatedDescription}
								onChange={(e) => setUpdatedDescription(e.target.value)}
							/>
						</label>
						<label>
              Prix
							<input
								type="number"
								value={updatedPrix}
								onChange={(e) => setUpdatedPrix(e.target.value)}
							/>
						</label>
						<label>
              Categorie
							<input
								type="text"
								value={updatedCategorie}
								onChange={(e) => setUpdatedCategorie(e.target.value)}
							/>
						</label>
						<input type="submit" className="btn" value="Enregistrer"/>
					</div>
				</form>
      ) : (
        <div>
          <h3>
            {product.nom}
            
          </h3>
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <td>{product.description}</td>
              </tr>
              <tr>
                <th>Prix</th>
                <td>${product.prix}</td>
              </tr>
              <tr>
                <th>Catégorie</th>
                <td>{product.categorie}</td>
              </tr>
            </tbody>
          </table>

          <div className="button-container">
            <Button className="modify-button" text="Modifier" color="blue" onClick={() => setIsEditing(true)} />
            <Button className="delete-button" text="Effacer" color="red" onClick={() => onDelete(product.id)} />
          </div>
        </div>
      )}
    </div>
  );
  
};

export default SingleProduct;
