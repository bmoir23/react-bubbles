import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./axiosWithAuth";
import axios from 'axios'; 

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res)
      setColorList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
