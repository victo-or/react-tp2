import { useState } from 'react';
import { useLocation } from 'react-router-dom'

const AddProduct = ({ onAdd }) => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [categorie, setCategorie] = useState(''); // Initialisez la catégorie à une valeur par défaut

    // const categories = ["Vêtements", "Électronique", "Instruments de Musique", "Outils", "Articles de Collection", "Articles de Sport", "Matériel Audio et Vidéo", "Objets d'Art", "Armes à Feu"]; // Liste des catégories possibles

    const onSubmit = (e) => {
        e.preventDefault();
        if (!nom || !description || !prix || !categorie) {
            alert('Please fill in all fields');
            return;
        }
        onAdd({ nom, description, prix, categorie });
        setNom('');
        setDescription('');
        setPrix('');
        setCategorie('');
    }

    const location = useLocation()
    
    return (
        <>
        {location.pathname === '/products' && (
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
                        {/* <select
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}>
                            <option value="" disabled>Choisissez une catégorie</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select> */}
                        <input
                            type="text"
                            placeholder='Catégorie'
                            value={categorie}
                            onChange={(e) => setPrix(e.target.value)}
                        />
                    </label>
                </div>
                <input type="submit" className="btn btn-block" value="Ajouter un produit" />
            </form>
        )}
        </>
    );
};

export default AddProduct;
