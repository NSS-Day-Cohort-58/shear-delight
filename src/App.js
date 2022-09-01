import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [products, changeProducts] = useState([])
  const [stylists, updateStylists] = useState([])
  const [styles, updateStyles] = useState([])
  const [colors, updateColors] = useState([])
  const [chosenProducts, setChosen] = useState(new Set())

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

  return (
    <>
      <div className='options'>
        <article className='stylists option'>
          <h1>List of Stylists</h1>
          <select id="stylist">
            <option value={0}>Please choose a stylist...</option>
            {
              stylists.map(
                (stylist) => {
                  return <option value={stylist.id}>{stylist.firstName} {stylist.lastName}</option>
                }
              )
            }
          </select>
        </article>

        <article className='colors option'>
          <h1>List of Colors</h1>
          {
            colors.map(
              (color) => {
                return <div className='color'>
                  <input type="radio" name="stylist" value={color.id} /> {color.color}
                </div>
              }
            )
          }
        </article>

        <article className='styles option'>
          <h1>List of Styles</h1>
          {
            styles.map(
              (style) => {
                return <div className='style'>
                  <input type="radio" name="stylist" value={style.id} /> {style.description}
                </div>
              }
            )
          }
        </article>
      </div>

      <h1>List of Products</h1>
      <article className='products'>
        {
          products.map(
            (product) => {
              return <section className='product'>
                <input
                  onChange={
                    (evt) => {
                      const copy = new Set(chosenProducts)
                      copy.has(product.id) ? copy.delete(product.id) : copy.add(product.id)
                      setChosen(copy)
                    }
                  }
                  type="checkbox" value={product.id} /> {product.name}
              </section>
            }
          )
        }
      </article>

      <h2>Shopping Cart</h2>
      {
        Array.from(chosenProducts).map(id => {
          const product = products.find(p => p.id === id)
          return <div>{ product.name }</div>
        })
      }

    </>
  );
}

