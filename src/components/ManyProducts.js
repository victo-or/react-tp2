import SingleProduct from "./SingleProduct"

const ManyProducts = ({products, onDeleteMany, onToggleMany}) => {
    return (
        <>
            {products.map((product)=>(
                <SingleProduct product={product} key={product.id}  onDelete={ onDeleteMany } onToggle={onToggleMany}/>
            ))}
        </>
    )
}

export default ManyProducts