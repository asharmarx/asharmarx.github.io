import { useState, useEffect } from "react";
import { useQuery } from 'urql';
import { WhatIHaveHeardWrapper } from "../styles/myStyles";


const WhatIHaveHeardQuery = `
  query {
    whatihaveheard {
      year
      aux {
        id
        song
        num
      }
    }
  }
`;

const WhatIHaveHeard = () => {
  const [result] = useQuery({
    query: WhatIHaveHeardQuery,
  });

  const { data } = result;
  const [whatIHaveHeard, setWhatIHaveHeard] = useState([]);

  useEffect(() => {
    if (data && data.whatihaveheard) return setWhatIHaveHeard(data.whatihaveheard)
    return () => null;
  }, [data])

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