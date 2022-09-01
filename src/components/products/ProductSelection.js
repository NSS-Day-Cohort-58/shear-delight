export const Products = (props) => {

    return <article className='products'>
        <h1>List of Products</h1>

        <button
            onClick={() => {
                // Toggle userWantsToSeeBargainProducts to true
                if (props.userWantsToSeeBargainProducts) {
                    props.setBargainChosen(false)

                }
                else {
                    props.setBargainChosen(true)

                }
            }}
        >Bargain Only</button>

        {
            props.bargainProducts.map(
                (product) => {
                    return <section className='product' key={`product--${product.id}`}>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = new Set(props.chosenProducts)
                                    copy.has(product.id) ? copy.delete(product.id) : copy.add(product.id)
                                    props.setterFunction(copy)
                                }
                            }
                            type="checkbox" value={product.id} />
                                {product.name}
                                {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </section>
                }
            )
        }
    </article>
}