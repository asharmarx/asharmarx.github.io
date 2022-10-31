import { useState, useEffect } from "react";
import { SeeAlsoWrapper } from "../styles/myStyles";

const Resources = ({ resources, topicID }) => {
    const rStyle = { padding: '0.5rem'}; 
    return (
  <ul style={rStyle}>
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
  const [whatIRead, setWhatIRead] = useState([]);
  useEffect(() => {
    fetch("https://brain.aman.monster/what-i-read")
    .then((response) => { 
      if (response.ok) {
      return response.json();
    }
    throw response;
  })
  .then((data) => {
    setWhatIRead(data.whatIRead);
  })
  .catch((err) => console.error(`the error is ${err}`))
  }, []);
  if (!whatIRead.length) {
    return null;
  }
  return (
  whatIRead.map((wIR) => (
    <span key={wIR.id}>
      <h1>{wIR.title}</h1>
      <p>- {wIR.summary}</p>
      {wIR.resources?.length ? <Resources resources={wIR.resources} topicID={wIR.id} /> : null}
      <br />
      {wIR.seeAlso?.length ? <SeeAlso seeAlso={wIR.seeAlso} topicID={wIR.id} /> : null}
    </span>
  )))};

export default WhatIRead;
