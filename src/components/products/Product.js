import { Link } from "react-router-dom"

export const Product = ({ product, chosenProducts, setChosen }) => {
    return <section className='product'>
    <input
        onChange={
            (evt) => {
                const copy = new Set(chosenProducts)
                copy.has(product.id) ? copy.delete(product.id) : copy.add(product.id)
                setChosen(copy)
            }
        }
        type="checkbox" value={product.id} />
    <Link to={`/product/edit/${product.id}`}>{product.name}</Link>
    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
</section>
}