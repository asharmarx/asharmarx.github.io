import { useState, useEffect } from "react";

const WhatIHaveDone = () => {
    const [whatIHaveDone, setWhatIHaveDone] = useState([]);
    useEffect(() => {
      fetch("https://brain.aman.monster/what-i-have-done")
      .then((response) => { 
        if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
        setWhatIHaveDone(data.whatIHaveDone);
    })
    .catch((err) => console.error(`the error is ${err}`))
    }, [])
    if (!whatIHaveDone.length) {
      return null;
    }
    return (
        whatIHaveDone.map((wIHD) => (
        <span key={wIHD.id}>
        <h1>{wIHD.title}</h1>
        <div className='d-flex'>
            <img src='' alt={wIHD.title} />
            <p>{wIHD.description}</p>
        </div>
        </span>
  )))};

  export default WhatIHaveDone;