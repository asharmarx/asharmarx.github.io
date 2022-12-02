import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WhatIHaveDoneWrapper } from "../styles/myStyles";
import CopyDatShiz from "./copyDatShiz";

const WhatIHaveDone = () => {
    const { REACT_APP_ENV } = process.env;
    const bumURL = REACT_APP_ENV === 'dev' ? "http://localhost:9443" : "https://brain.aman.monster";
    const [whatIHaveDone, setWhatIHaveDone] = useState([]);
    const { hash } = useLocation();
    useEffect(() => {
      const fetchDone = async () => {
        try {
          const resDone = await fetch(`${bumURL}/what-i-have-done`);
          const resDoneData = await resDone.json();
          setWhatIHaveDone(resDoneData.whatIHaveDone);
        } catch (err) {
          console.error('done error is: ', err);
        }
      }
      fetchDone();
    }, []);

    useEffect(() => {
      if (hash && whatIHaveDone.length) setTimeout(() => {document.getElementById(hash.slice(1,)).scrollIntoView({ behavior: "smooth"});}, 800);
    },[whatIHaveDone, hash]);
  
    if (!whatIHaveDone.length) {
      return null;
    }
    return (
        whatIHaveDone.map((wIHD) => (
        <WhatIHaveDoneWrapper id={wIHD.id} key={wIHD.id}>
          <h1>{wIHD.title}<a href={`#${wIHD.id}`} aria-hidden="true"><CopyDatShiz itemID={wIHD.id} /></a></h1>
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