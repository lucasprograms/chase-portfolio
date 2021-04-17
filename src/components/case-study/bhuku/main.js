import * as React from 'react'
import PropTypes from 'prop-types'

import Define from './define'
import Research from './research'
import Design from './design'
import FinalPrototype from '../final-prototype/final-prototype'

const loads = [
  {
    title: 'Research',
    items: ['Secondary Research', 'Competitive Analysis', 'User Interviews'],
  },
  {
    title: 'UX Design',
    items: [
      'Persona',
      'Feature Roadmap',
      'Low-fi Sketch Ideation',
      'Low-fi Wireframes',
      'Prototyping',
    ],
  },
  {
    title: 'UI Design',
    items: ['Style Tile', 'UI Kit', 'Hi-Fi Mockups'],
  },
  {
    title: 'Testing',
    items: ['User Testing', 'UX Iterations'],
  },
]

const finalThoughts = [
  'This project was a fun, fast-paced exploration of Material Design UI for Android. Even so, I always seek to bring in as much research as possible, and create products that solve real user needs. ',
  'The final product solves for my original How Might We statement, creating an app that incentivizes engagement with personalized recommendations, and adheres to Material Design guidelines while still being simple, clean, and beautiful.',
]

const BhukuMain = ({ highlightColor, backgroundColor }) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-12 py-10 px-5 2xl:px-0"
        style={{ backgroundColor }}
      >
        <div className="lg:col-start-3 lg:col-span-9">
          <Define
            title="Define"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
          <Research
            title="Research"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 py-10 pl-5 2xl:pl-0">
        <div className="lg:col-start-3 lg:col-span-10">
          <Design title="Design" />
        </div>
      </div>
      <FinalPrototype
        videoSrc="https://www.loom.com/embed/319e54e4491d4c1f92dedf3f52e32c98"
        videoTitle="bhuku-final-prototype-video"
        prototypeLink="https://www.figma.com/file/401B4AhQZSy0RdMfTGlafp/Portfolio?node-id=737%3A205"
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}
        loads={loads}
        finalThoughts={finalThoughts}
      />
    </div>
  )
}

BhukuMain.propTypes = {
  highlightColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default BhukuMain
