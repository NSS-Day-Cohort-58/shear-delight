import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ProductEditForm = () => {
    const [productToEdit, setEditingProduct] = useState({
        name: "",
        price: 0,
        productTypeId: 0
    })
    const [allProductTypes, updateTypes] = useState([])

    const navygayte = useNavigate()
    const { productId } = useParams() // This is the primary key of the product that was clicked on in the list


    useEffect(() => {
        // Get the chosen product object from the API
        fetch(`http://localhost:8088/products/${productId}`)
            .then(response => response.json())
            .then((singleProductObjectFromJSONServer) => {
                setEditingProduct(singleProductObjectFromJSONServer)
            })

        // Get all product types for the <select>
        fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productTypesArray) => {
                updateTypes(productTypesArray)
            })
    }, [productId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const product = {
            price: parseFloat(parseFloat(productToEdit.price).toFixed(2)),
            name: productToEdit.name,
            productTypeId: parseInt(productToEdit.productTypeId)
        }

        fetch(`http://localhost:8088/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(
                () => {
                    navygayte("/productChooserator")
                }
            )
    }

    return (
        <form className="profile">
            <h2 className="profile__title">Edit {productToEdit.name}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productName">Product name:</label>
                    <input tabIndex={1}
                        required autoFocus
                        type="text" id="productName"
                        className="form-control"
                        value={productToEdit.name}
                        onChange={
                            (evt) => {
                                // TODO: Update name property on state object
                                const copy = { ...productToEdit }
                                copy.name = evt.target.value
                                setEditingProduct(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price"
                        className="form-control"
                        value={productToEdit.price}
                        onChange={
                            (evt) => {
                                const copy = { ...productToEdit }
                                copy.price = evt.target.value
                                setEditingProduct(copy)

                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productType">Product type:</label>
                    <select id="productType" value={productToEdit.productTypeId}
                        tabIndex={4}
                        onChange={(evt) => {
                            const copy = { ...productToEdit }
                            copy.productTypeId = evt.target.value
                            setEditingProduct(copy)
                        }}
                    >
                        <option value={0}>Please choose a type...</option>
                        {
                            allProductTypes.map(type => {
                                return <option value={type.id}>{type.description}</option>
                            })
                        }
                    </select>
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