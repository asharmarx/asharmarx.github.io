import whatIHaveDone from '../whatihavedone.js'

const WhatIHaveDone = () =>   whatIHaveDone.map((wIHD) => (
    <span key={wIHD.id}>
      <h1>{wIHD.title}</h1>
      <div className='d-flex'>
        <img src='' alt={wIHD.title} />
        <p>{wIHD.description}</p>
      </div>
    </span>
  ));

  export default WhatIHaveDone;