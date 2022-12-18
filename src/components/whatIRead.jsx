import { useState, useEffect } from "react";
import { useQuery } from 'urql';
import { useLocation } from "react-router-dom";
import { SeeAlsoWrapper, WhatIReadWrapper } from "../styles/myStyles";
import CopyDatShiz from "./copyDatShiz";

const Resources = ({ resources, topicID }) => {
    return (
  <ul>
    {resources.map((r, idx) => (
      <li key={`${topicID}.resource.${idx}`}>{r.title} - <a target="__blank" href={r.link}>{r.link}</a></li>
    ))}
  </ul>
)};
const SeeAlso = ({ seeAlso, topicID}) => {
    return (
        <SeeAlsoWrapper>
            <h3>See Also:</h3>
            <div className="seeAlso">
                {seeAlso.map((sA, idx) => <span key={`${topicID}.seeAlso.${idx}`}><a target="__blank" href={sA.link}>{sA.title}</a></span>)}
            </div>
        </SeeAlsoWrapper>
    )
};

const WhatIReadQuery = `
  query {
    whatiread {
      id
      title
      summary
      seeAlso {
        title
        link
      }
      resources {
        title
        link
      }
    }
}`;

const WhatIRead = () => {
  const [result] = useQuery({
    query: WhatIReadQuery,
  });

  const { data } = result;
  const [whatIRead, setWhatIRead] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    if (data && data.whatiread) return setWhatIRead(data.whatiread)
    return () => null;
  }, [data])

  useEffect(() => {
    if (hash && whatIRead.length) setTimeout(() => {document.getElementById(hash.slice(1,)).scrollIntoView({ behavior: "smooth"});}, 800);;
  },[whatIRead, hash]);
  
  if(!whatIRead.length) return null;
  return (
    <WhatIReadWrapper>
      {whatIRead.map((wIR) => (
        <div id={wIR.id} key={wIR.id}>
          <h1>{wIR.title}<a href={`#${wIR.id}`} aria-hidden="true"><CopyDatShiz itemID={wIR.id}/></a></h1>
          <p>{wIR.summary}</p>
          {wIR.resources?.length ? <Resources resources={wIR.resources} topicID={wIR.id} /> : null}
          <br />
          {wIR.seeAlso?.length ? <SeeAlso seeAlso={wIR.seeAlso} topicID={wIR.id} /> : null}
        </div>
        ))
      }
    </WhatIReadWrapper>
  )};

export default WhatIRead;
