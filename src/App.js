import { useEffect, useState } from 'react';
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from './components/ApplicationViews';
import './App.css';

export const App = () => {
  const [products, changeProducts] = useState([])
  const [stylists, updateStylists] = useState([])
  const [styles, updateStyles] = useState([])
  const [colors, updateColors] = useState([])
  const [chosenProducts, setChosen] = useState(new Set())
  const [bargainProducts, setBargains] = useState([])
  const [userWantsToSeeBargainProducts, setBargainChosen] = useState(false)

  useEffect(
    () => {
      fetch(`http://localhost:8088/products`)
        .then(response => response.json())
        .then((arrayOfAllProductObjects) => {
          changeProducts(arrayOfAllProductObjects)
        })

      fetch(`http://localhost:8088/stylists`)
        .then(response => response.json())
        .then((arrayOfAllstylistObjects) => {
          updateStylists(arrayOfAllstylistObjects)
        })

      fetch(`http://localhost:8088/hairStyles`)
        .then(response => response.json())
        .then((styleArray) => {
          updateStyles(styleArray)
        })

      fetch(`http://localhost:8088/hairColors`)
        .then(response => response.json())
        .then((colorArray) => {
          updateColors(colorArray)
        })
    },
    []
  )

  useEffect(
    () => {
      if (userWantsToSeeBargainProducts) {
        // Find all the products that cost $40 or less
        const theBargains = products.filter(p => p.price < 40)

        // Update the array of bargain products with what we found
        setBargains(theBargains)

      }
      else {
        setBargains(products)

      }
    },
    [userWantsToSeeBargainProducts]
  )

  return (
    <>
      <NavBar />
      <ApplicationViews stylists={stylists} styles={styles}
        colors={colors}
        products={products}
        chosenProducts={chosenProducts}
        setChosen={setChosen}
        bargainProducts={bargainProducts}
        userWantsToSeeBargainProducts={userWantsToSeeBargainProducts}
        setBargainChosen={setBargainChosen}
      />
    </>
  );
}

