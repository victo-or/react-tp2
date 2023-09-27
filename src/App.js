import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  // État local pour stocker les produits récupérés depuis le serveur
  const [products, setProducts] = useState([])

  // Effet secondaire pour récupérer les produits depuis le serveur au chargement
  useEffect(() =>{
    const getProducts = async () => {
        const productsFromServer = await fetchProducts()
        setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  // GLOBAL
  // Fonction pour récupérer la liste des produits depuis le serveur
  const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/products')
      const data = await res.json()
      return data
  } 
  
  // DELETE
  // Fonction pour supprimer un produit spécifique
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    // Mettre à jour l'état local en supprimant le produit
    setProducts(products.filter((product) => product.id !== id))
  }

  // UPDATE
  // Fonction pour mettre à jour un produit spécifique
  const updateProduct = async (updatedProduct) => {
    const res = await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
    // Mettre à jour l'état local des produits uniquement si la requête a réussi
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  }

  // ADD
  // Fonction pour ajouter un nouveau produit
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()
    // Mettre à jour l'état local en ajoutant le nouveau produit
    setProducts([...products, newProduct])
   }
   
  // TOGGLE FORM
  // État local pour contrôler l'affichage du formulaire d'ajout
  const [showAddProduct, setShowAddProduct] = useState(false)

  return (
  <BrowserRouter>
    <div className='container'>
        {/* En-tête de l'application */}
        <Header onAddBtn={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
        {showAddProduct && <AddProduct onAdd={addProduct}/>}
        <Routes>
          <Route path='/products' element={<ManyProducts products={products} onDeleteMany={deleteProduct} onUpdateMany={updateProduct} />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
    </div>
    {/* Pied de page de l'application */}
    <Footer/>
  </BrowserRouter>
  );
}
export default App
