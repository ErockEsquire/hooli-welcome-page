import React from 'react';
import SectionOne from './sectionOne.js'
import SectionTwo from './sectionTwo.js'
import SectionThree from './sectionThree.js'
import SectionFour from './sectionFour.js'

const Main = () => {
  return (
    <main className="main-container">
      <div className="hoolibg"></div>
      <SectionOne 
        headerOne="Hooli isn't about software, Hooli is about people."
        contentOne="Our products are more than hardware or software. We're more than the chat, mail, search and phone that's crowned Hooli as the most respected brand in the world."
        />
      <div className="gavinbg"></div>
      <SectionTwo 
        headerOne="Endframe is now Hooli" 
        contentOne="Endframe has been dominating the middle-out compression space, with recent deals totaling over $30 million and serving clients such as Intersite Content LLC and energy-drink company Homicide. Through its revolutionary compression algorithm, the platform provides access to files at a drastically reduced size. Endframe CEO Marc Howard has stated Endframe “looks forward to integrating with Hooli’s innovative and world-changing technology that truly makes the world a better place.”"
      />
      <SectionThree 
        headerOne="Hooli isn't just about innovation. Hooli is about change."
      />
      <div className="hooliend"></div>
      <SectionFour 
        quote="I don't want to live in a world, where someone else is making the world a better place than we are."
        name="Gavin Belson"
      />
    </main>
  )
}

export default Main;