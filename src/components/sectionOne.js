import React from 'react';
import { ReactComponent as People } from '../icons/people.svg';


const SectionOne = ({headerOne, contentOne}) => {
  return (
    <div className="sectionOne">
      <span className="people"><People /></span>
      <h1>{headerOne}</h1>
        <p>{contentOne}</p>
        <br></br>
    </div>
  )
}

export default SectionOne;