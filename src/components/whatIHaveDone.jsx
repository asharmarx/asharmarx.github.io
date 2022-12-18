import { useState, useEffect } from "react";
import { useQuery } from 'urql';
import { useLocation } from "react-router-dom";
import { WhatIHaveDoneWrapper } from "../styles/myStyles";
import CopyDatShiz from "./copyDatShiz";


const WhatIHaveDoneQuery = `
  query {
    whatihavedone {
      id
      title
      description
      components
      imageLink
    }
  }
  `;

const WhatIHaveDone = () => {
  const [result] = useQuery({
    query: WhatIHaveDoneQuery,
  });

  const { data } = result;
  const [whatIHaveDone, setWhatIHaveDone] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    if (data && data.whatihavedone) return setWhatIHaveDone(data.whatihavedone)
    return () => null;
  }, [data])
    useEffect(() => {
    if (hash && whatIHaveDone.length) setTimeout(() => {document.getElementById(hash.slice(1,)).scrollIntoView({ behavior: "smooth"});}, 800);
  },[whatIHaveDone, hash]);

  if (!whatIHaveDone.length) {
    return null;
  }
    return (
      <WhatIHaveDoneWrapper >
        {
          whatIHaveDone.map((wIHD) => (
            <div id={wIHD.id} key={wIHD.id}>
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
            </div>
          ))
        }
  </WhatIHaveDoneWrapper>
)};

  export default WhatIHaveDone;