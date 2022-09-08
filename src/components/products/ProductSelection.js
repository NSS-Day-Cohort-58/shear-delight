import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Product } from "./Product"

export const Products = () => {
    const [products, changeProducts] = useState([])
    const [chosenProducts, setChosen] = useState(new Set())
    const [bargainProducts, setBargains] = useState([])
    const [userWantsToSeeBargainProducts, setBargainChosen] = useState(false)
    const navygayte = useNavigate()

    useEffect(() => {
       setBargains(products)
    }, [products])

    useEffect(() => {
        fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((arrayOfAllProductObjects) => {
                changeProducts(arrayOfAllProductObjects)
            })
    }, [])

    useEffect(
        () => {
            userWantsToSeeBargainProducts
                ? setBargains(products.filter(p => p.price < 40))
                : setBargains(products)
        },
        [userWantsToSeeBargainProducts]
    )

    return <>
        <article className='products'>
            <h1>List of Products</h1>

            <button
                onClick={() => setBargainChosen(!userWantsToSeeBargainProducts)}
            >Bargain Only</button>

            <button
                onClick={() => navygayte("/productCreatorinator") }
            >Create New Product</button>

            {
                bargainProducts.map(
                    (product) => {
                        return <Product key={`product--${product.id}`}
                                        product={product}
                                        chosenProducts={chosenProducts}
                                        setChosen={setChosen} />
                    }
                )
            }
        </article>

        <h2>Shopping Cart</h2>
        {
            Array.from(chosenProducts).map(id => {
                const product = products.find(p => p.id === id)
                return <div>{product.name}</div>
            })
        }
    </>
}
