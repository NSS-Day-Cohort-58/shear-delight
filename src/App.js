import { useEffect, useState } from 'react';
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from './components/ApplicationViews';
import './App.css';

export const App = () => {

  const [stylists, updateStylists] = useState([])
  const [styles, updateStyles] = useState([])
  const [colors, updateColors] = useState([])

  useEffect(
    () => {


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
      <NavBar />
      <ApplicationViews stylists={stylists} styles={styles}
        colors={colors}
      />
    </>
  );
}

