import React from 'react';
import SectionOne from './components/sectionOne.js'
import SectionTwo from './components/sectionTwo.js'
import SectionThree from './components/sectionThree.js'
import Footer from './components/footer.js'
import { ReactComponent as Hooli } from './icons/hooli.svg';

const Main = () => {
  return (
    <main className="main-container">
      <div className="hoolibg">
        <div>
          <Hooli />
          <h3>M A K I N G &nbsp; T H E &nbsp; W O R L D &nbsp; A &nbsp; B E T T E R &nbsp; P L A C E</h3>
        </div>
      </div>
      <SectionOne 
        headerOne="Hooli isn't about software, Hooli is about people."
        contentOne="Our products are more than hardware or software. We're more than the chat, mail, search and phone that's crowned Hooli as the most respected brand in the world."
        />
      <div className="gavinbg"></div>
      <SectionTwo 
        headerOne="Endframe is now Hooli" 
        contentOne="Endframe has been dominating the middle-out compression space, with recent deals totaling over $30 million and serving clients such as energy-drink company Homicide. Endframe CEO Marc Howard has stated Endframe “looks forward to integrating with Hooli’s innovative and world-changing technology that truly makes the world a better place.”"
      />
      <div className="walls"></div>
      <SectionThree 
        headerOne="Hooli isn't just about innovation. Hooli is about change."
      />
      <div className="hooliend"></div>
      <Footer 
        quote="I don't want to live in a world, where someone else is making the world a better place than we are."
        name="Gavin Belson"
      />
    </main>
  )
}

export default Main;
