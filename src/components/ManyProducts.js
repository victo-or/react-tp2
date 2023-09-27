import React from 'react';
import SingleProduct from './SingleProduct';

const ManyProducts = ({ products, onDeleteMany, onUpdateMany }) => {
  return (
    <>
      {/* Titre de la section des produits */}
      <h1>Produits</h1>

      {products.map((product) => (
        // Affiche chaque produit en utilisant le composant SingleProduct
        <SingleProduct
          product={product} // Les données du produit à afficher
          key={product.id} // Clé unique pour l'élément de liste
          onDelete={onDeleteMany} // Fonction de suppression du produit
          onUpdate={onUpdateMany} // Fonction de mise à jour du produit
        />
      ))}
    </>
  );
};

export default ManyProducts;
