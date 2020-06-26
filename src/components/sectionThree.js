import React from 'react';
import { ReactComponent as World} from '../icons/world.svg';

const SectionThree = ({headerOne}) => {
  return (
    <div className="sectionThree">
      <span className="world"><World /></span>
      <h1>{headerOne}</h1>
    </div>
  )
}

export default SectionThree;