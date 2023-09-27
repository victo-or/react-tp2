import React, { useState } from 'react';
import Button from './Button';

const SingleProduct = ({ product, onDelete, onUpdate }) => {
  // État local pour gérer l'édition du produit
  const [isEditing, setIsEditing] = useState(false);

  // État local pour stocker les valeurs modifiées du produit
  const [updatedNom, setUpdatedNom] = useState(product.nom);
  const [updatedDescription, setUpdatedDescription] = useState(product.description);
  const [updatedPrix, setUpdatedPrix] = useState(product.prix);
  const [updatedCategorie, setUpdatedCategorie] = useState(product.categorie);

  // Gestion de la soumission du formulaire d'édition
  const onSubmit = (e) => {
    e.preventDefault();
    // Vérifie si tous les champs sont remplis
    if (!updatedNom || !updatedDescription || !updatedPrix || !updatedCategorie) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    // Appelle la fonction onUpdate avec les nouvelles valeurs du produit
    onUpdate({
      id: product.id, // ID du produit
      nom: updatedNom, // Nouveau nom
      description: updatedDescription, // Nouvelle description
      prix: updatedPrix, // Nouveau prix
      categorie: updatedCategorie, // Nouvelle catégorie
    });

    // Désactive le mode édition
    setIsEditing(false);
  }

  return (
    <div className="product">
      {isEditing ? (
        // Formulaire d'édition
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
              Catégorie
              <input
                type="text"
                value={updatedCategorie}
                onChange={(e) => setUpdatedCategorie(e.target.value)}
              />
            </label>
            <input type="submit" className="btn" value="Enregistrer" />
          </div>
        </form>
      ) : (
        // Affichage normal du produit
        <div>
          <h3>{product.nom}</h3>
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
            {/* Bouton pour activer le mode d'édition */}
            <Button className="modify-button" text="Modifier" color="blue" onClick={() => setIsEditing(true)} />
            {/* Bouton pour supprimer le produit */}
            <Button className="delete-button" text="Effacer" color="red" onClick={() => onDelete(product.id)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
