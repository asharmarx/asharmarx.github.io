import { useState, useEffect } from "react";
import { WhatIHaveHeardWrapper } from "../styles/myStyles";

const WhatIHaveHeard = () => {
  const { REACT_APP_ENV } = process.env;
  const bumURL = REACT_APP_ENV === 'dev' ? "http://localhost:9443" : "https://brain.aman.monster";
  const [whatIHaveHeard, setWhatIHaveHeard] = useState([]);
  useEffect(() => {
    const fetchHeard = async () => {
      try {
        const resHeard = await fetch(`${bumURL}/what-i-have-heard`);
        const resHeardData = await resHeard.json();
        setWhatIHaveHeard(resHeardData.whatIHaveHeard);
      } catch (err) {
        console.error('heard error is: ', err);
      }
    }
    fetchHeard();
  }, []);

  if (!whatIHaveHeard.length) {
    return null;
  }
  return (
    whatIHaveHeard.map((wIHH) => (
      <WhatIHaveHeardWrapper key={wIHH.year}>
        <h2>{wIHH.year}</h2>
        <div className="auxLinknPicDiv">
          {wIHH.aux.map(
            (y) =>
                <a key={`${y.id}-${y.num}`} href={`https://youtube.com/watch?v=${y.id}`} target="_blank" rel="noreferrer">
                  <img
                    src={`https://img.youtube.com/vi/${y.id}/mqdefault.jpg`}
                    alt={y.song}
                  />
                    {y.song}
                </a>
          )}
        </div>
      </WhatIHaveHeardWrapper>
    ))
  )
};

  export default WhatIHaveHeard;