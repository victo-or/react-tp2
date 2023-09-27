// import './App.css';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
// import ModifProduct from './components/ModifProduct';
import About from './components/About'

function App() {
  //GLOBAL
  const [products, setProducts] = useState(
    [
      {
        "id": 1,
        "nom": "Bague en or 18 carats",
        "description": "Bague sertie d'un diamant 1 carat de haute qualité.",
        "prix": 1999.99,
        "categorie": "Bijoux"
      },
      {
        "id": 2,
        "nom": "Téléviseur 4K Samsung",
        "description": "Téléviseur intelligent avec une excellente qualité d'image.",
        "prix": 699.99,
        "categorie": "Électronique"
      },
      {
        "id": 3,
        "nom": "Guitare acoustique Martin D-28",
        "description": "Guitare acoustique professionnelle en bois massif.",
        "prix": 1699.99,
        "categorie": "Instruments de Musique"
      },
      {
        "id": 4,
        "nom": "Perceuse à percussion Dewalt",
        "description": "Perceuse à percussion électrique puissante pour les professionnels.",
        "prix": 129.99,
        "categorie": "Outils"
      },
      {
        "id": 5,
        "nom": "Bande dessinée Spider-Man #1",
        "description": "Édition originale de Spider-Man datant de 1962.",
        "prix": 499.99,
        "categorie": "Articles de Collection"
      }
    ]
  )
  
  //DELETE
  const deleteProduct = (id) => {
    //console.log(id)
    setProducts(products.filter((product) => product.id !== id))
  }
  //update
  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => product.id === updatedProduct.id ? updatedProduct : product));
  }
  // setProducts(products.map((product) => product.id === id ? {...product, reminder:!product.reminder}: product ))

  //Add
  const addProduct = (product) => {
    //console.log(product)
    const id = Math.floor(Math.random() * 1000)
    const newProduct = {id, ...product}
    //console.log(newProduct)
    setProducts([...products, newProduct])
   }
   
  
  // toggle form
  const [showAddProduct, setShowAddProduct] = useState(false)

  // const location = useLocation();

  return (
  <BrowserRouter>
    <div className='container'>
        <Header onAddBtn={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
        {/* <AddProduct onAdd={addProduct}/> */}
        {showAddProduct && <AddProduct onAdd={addProduct}/>}
        {/* <ManyProducts products={products} onDeleteMany={deleteProduct}  onToggleMany={toggleReminder} /> */}

        {/* <ManyProducts products={products} onDeleteMany={deleteProduct} onUpdateMany={updateProduct}/> */}

        {/* <ModifProduct/> */}
        <Routes>
          <Route path='/products' element={<ManyProducts products={products} onDeleteMany={deleteProduct} onUpdateMany={updateProduct} />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
  );
}
export default App