import { useState, useEffect } from "react";
import { WhatIHaveDoneWrapper } from "../styles/myStyles";

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
        <WhatIHaveDoneWrapper key={wIHD.id}>
          <h1>{wIHD.title}</h1>
          <div className='d-flex'>
            {wIHD.imageLink && <span>
              {wIHD.imageLink.map((img) => (
                  <img style={{ margin: "0 0.5rem 0 0"}} key={img} src={img} alt={wIHD.title} />
              )
              )}
              </span>}
              <p>{wIHD.description}</p>
              <ul>
                  {wIHD.components && wIHD.components.map((comp) => <li key={comp}>{comp}</li>)}
              </ul>
          </div>
        </WhatIHaveDoneWrapper>
  )))};

  export default WhatIHaveDone;