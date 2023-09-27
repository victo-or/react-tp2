import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AddProduct = ({ onAdd }) => {
    // État local pour les champs de saisie
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [categorie, setCategorie] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // Vérifie si tous les champs sont remplis
        if (!nom || !description || !prix || !categorie) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        // Appelle la fonction onAdd avec les données du nouveau produit
        onAdd({ nom, description, prix, categorie });
        // Réinitialise les champs après l'ajout du produit
        setNom('');
        setDescription('');
        setPrix('');
        setCategorie('');
    }

    const location = useLocation();

    return (
        <>
        {location.pathname === '/products' && (
            // Formulaire pour ajouter un nouveau produit
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>
                        Nom
                        <input
                            type="text"
                            value={nom}
                            placeholder='Nom du produit'
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label>
                        Description
                        <input
                            type="text"
                            placeholder='Description du produit'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label>
                        Prix
                        <input
                            type="number"
                            placeholder='Prix du produit'
                            value={prix}
                            onChange={(e) => setPrix(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label>
                        Catégorie
                        <input
                            type="text"
                            placeholder='Catégorie'
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}
                        />
                    </label>
                </div>
                {/* Bouton pour soumettre le formulaire d'ajout */}
                <input type="submit" className="btn btn-block" value="Ajouter un produit" />
            </form>
        )}
        </>
    );
};

export default AddProduct;
