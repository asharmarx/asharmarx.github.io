import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SeeAlsoWrapper, WhatIReadWrapper } from "../styles/myStyles";

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
}
const WhatIRead = () => {
  const { REACT_APP_ENV } = process.env;
  const bumURL = REACT_APP_ENV === 'dev' ? "http://localhost:9443" : "https://brain.aman.monster";
  const [whatIRead, setWhatIRead] = useState([]);
  const { hash } = useLocation();
  useEffect(() => {
    const fetchDone = async () => {
      try {
        const resRead = await fetch(`${bumURL}/what-i-read`);
        const resReadData = await resRead.json();
        setWhatIRead(resReadData.whatIRead);
      } catch (err) {
        console.error('read error is: ', err);
      }
    }
    fetchDone();
  }, []);

  useEffect(() => {
    if (hash && whatIRead.length) setTimeout(() => {document.getElementById(hash.slice(1,)).scrollIntoView({ behavior: "smooth"});}, 800);;
  },[whatIRead, hash]);

  if (!whatIRead.length) {
    return null;
  }
  return (
      whatIRead.map((wIR) => (
        <WhatIReadWrapper id={wIR.id} key={wIR.id}>
          <h1>{wIR.title}<a href={`#${wIR.id}`} aria-hidden="true">#</a></h1>
          <p>- {wIR.summary}</p>
          {wIR.resources?.length ? <Resources resources={wIR.resources} topicID={wIR.id} /> : null}
          <br />
          {wIR.seeAlso?.length ? <SeeAlso seeAlso={wIR.seeAlso} topicID={wIR.id} /> : null}
        </WhatIReadWrapper>
      ))
  )};

export default WhatIRead;
