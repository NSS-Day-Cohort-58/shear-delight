import { Outlet, Route, Routes } from "react-router-dom"
import { ColorList } from "./colors/ColorList"
import { Products } from "./products/ProductSelection"
import { ShoppingCart } from "./products/ShoppingCart"
import { StyleList } from "./styles/StyleList"
import { StylistList } from "./stylists/Stylists"

export const ApplicationViews = ({
        stylists, userWantsToSeeBargainProducts,
        setBargainChosen, bargainProducts,
        styles, colors, setChosen, chosenProducts,
        products }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>✄ 💇🏾‍♂️ Shear Delight 💇🏾‍♂️ ✄</h1>
                    <Outlet />
                </>
            }>
                <Route path="stylists" element={
                    <StylistList stylists={stylists} />
                } />
                <Route path="styles" element={
                    <StyleList styles={styles} />
                } />
                <Route path="colors" element={
                    <ColorList colorArray={colors} />
                } />
                <Route path="productChooserator" element={
                    <>
                        <Products products={products}
                                setterFunction={setChosen}
                                setBargainChosen={setBargainChosen}
                                userWantsToSeeBargainProducts={userWantsToSeeBargainProducts}
                                bargainProducts={bargainProducts}
                                chosenProducts={chosenProducts} />
                        <ShoppingCart products={products} chosenProducts={chosenProducts} />
                    </>
                } />

            </Route>
        </Routes>
    )
}
