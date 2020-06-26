import React from 'react';

const SectionTwo = ({headerOne, contentOne}) => {
  return (
    <div className="sectionTwo">
      <div className="section-two-content">
        <h1>{headerOne}</h1>
        <p>{contentOne}</p>
      </div>
      <div className="section-two-picture"></div>
    </div>
  )
}

export default SectionTwo;