import { useState } from "react"
import { ProductSearch } from "./ProductSearch"
import { Products } from "./ProductSelection"

export const ProductSearchContainer = () => {
    const [userSearchTerms, setTerms] = useState("")

    return <>
        <ProductSearch setTerms={setTerms} />
        <Products userSearchTerms={userSearchTerms} />
    </>
}