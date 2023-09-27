import SingleProduct from "./SingleProduct"

const ManyProducts = ({products, onDeleteMany, onUpdateMany }) => {
    return (
        <>
            <h1>Produits</h1>
            
            {products.map((product)=>(
                <SingleProduct product={product} key={product.id}  onDelete={ onDeleteMany } onUpdate={onUpdateMany} />
            ))}
        </>
    )
}

export default ManyProducts