import { Outlet, Route, Routes } from "react-router-dom"
import { ColorList } from "./colors/ColorList"
import { ProductEditForm } from "./products/ProductEditForm"
import { ProductForm } from "./products/ProductForm"
import { ProductSearch } from "./products/ProductSearch"
import { ProductSearchContainer } from "./products/ProductSearchContainer"
import { Products } from "./products/ProductSelection"
import { StyleList } from "./styles/StyleList"
import { StylistList } from "./stylists/Stylists"

export const ApplicationViews = ({ stylists, styles, colors }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>✄ 💇🏾‍♂️ Shear Delight 💇🏾‍♂️ ✄</h1>
                    <Outlet />
                </>
            }>
                <Route path="stylists" element={ <StylistList stylists={stylists} /> } />
                <Route path="styles" element={ <StyleList styles={styles} /> } />
                <Route path="colors" element={ <ColorList colorArray={colors} /> } />
                <Route path="productChooserator" element={ <ProductSearchContainer /> } />
                <Route path="productCreatorinator" element={ <ProductForm /> } />
                <Route path="product/edit/:productId" element={ <ProductEditForm /> } />
            </Route>
        </Routes>
    )
}
