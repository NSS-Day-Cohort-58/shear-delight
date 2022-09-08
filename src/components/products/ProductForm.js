import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    // TODO: Provide initial state for product
    const [newProduct, changeNewProduct] = useState({
        name: "",
        price: 0,
        productTypeId: 0
    })
    const [newType, updateNewType] = useState("")
    const [allProductTypes, updateTypes] = useState([])
    const navygayte = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/productTypes`)
           .then(response => response.json())
           .then((productTypesArray) => {
                updateTypes(productTypesArray)
           })
    }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const product = {
            price: parseFloat(parseFloat(newProduct.price).toFixed(2)),
            name: newProduct.name,
            productTypeId: parseInt(newProduct.productTypeId)
        }

        fetch(`http://localhost:8088/productTypes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: newType
            })
        })
            .then(response => response.json())
            .then(
                (newProductTypeThatWasCreated) => {  // 4

                    product.productTypeId = newProductTypeThatWasCreated.id

                    fetch(`http://localhost:8088/products`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(response => response.json())
                        .then(
                            (newProductObjectCreatedByJSONServerThatImNotUsing) => {
                                navygayte("/productChooserator")
                            }
                        )
                }
            )
    }

    return (
        <form className="profile">
            <h2 className="profile__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productName">Product name:</label>
                    <input
                        required autoFocus
                        type="text" id="productName"
                        className="form-control"
                        value={newProduct.name}
                        onChange={
                            (evt) => {
                                // TODO: Update name property on state object
                                const copy = {...newProduct}
                                copy.name = evt.target.value
                                changeNewProduct(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price"
                        className="form-control"
                        value={newProduct.price}
                        onChange={
                            (evt) => {
                                const copy = {...newProduct}
                                copy.price = evt.target.value
                                changeNewProduct(copy)

                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productType">Product type:</label>
                    <select id="productType" value={newProduct.productTypeId}
                            onChange={(evt) => {
                                const copy = {...newProduct}
                                copy.productTypeId = evt.target.value
                                changeNewProduct(copy)
                            }}
                        >
                        <option value={0}>Please choose a type...</option>
                        {
                            allProductTypes.map(type => {
                                return <option value={type.id}>{type.description}</option>
                            })
                        }
                    </select>

                    <input
                        onChange={(event) => {
                            updateNewType(event.target.value)
                        }}
                        type="text" placeHolder="New product type..." value={newType} />
                </div>
            </fieldset>
            <button
                onClick={handleSaveButtonClick}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
    )
}