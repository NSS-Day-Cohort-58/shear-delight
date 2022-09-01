export const ShoppingCart = ({ chosenProducts, products }) => {


    return <><h2>Shopping Cart</h2>
        {
            Array.from(chosenProducts).map(id => {
                const product = products.find(p => p.id === id)
                return <div>{product.name}</div>
            })
        }
    </>
}