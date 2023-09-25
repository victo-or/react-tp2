import { useState } from 'react';

const ModifProduct = ({ product, onUpdate }) => {
    const [nom, setNom] = useState(product.nom);
    const [description, setDescription] = useState(product.description);
    const [prix, setPrix] = useState(product.prix);
    const [categorie, setCategorie] = useState(product.categorie);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!nom || !description || !prix || !categorie) {
            alert('Please fill in all fields');
            return;
        }

        onUpdate({ id: product.id, nom, description, prix, categorie });
    }

    return (
        <form className="modify-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Nom
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Description
                    <input
                        type="text"
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
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                    />
                </label>
            </div>
            <input type="submit" className="btn btn-block" value="Save Changes" />
        </form>
    );
};

export default ModifProduct;
