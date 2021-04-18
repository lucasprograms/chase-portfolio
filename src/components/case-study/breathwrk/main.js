import * as React from 'react'
import PropTypes from 'prop-types'

import FinalPrototype from '../final-prototype/final-prototype'
import BackgroundSection from '../../util/layout/background-section'
import ContentSection from '../../util/layout/content-section'
import Define from './define'
import Research from './research'
import Design from './design'

const BhukuMain = ({
  highlightColor,
  backgroundColor,
  loads,
  finalThoughts,
}) => {
  return (
    <div>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Define title="Define" />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection>
        <ContentSection>
          <Research title="Research" />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Design title="Design" />
        </ContentSection>
      </BackgroundSection>
      <FinalPrototype
        videoSrc="https://www.loom.com/embed/88d62074e7124de0a56e2839a4c4d87c"
        videoTitle="breathwrk-final-prototype-video"
        prototypeLink="https://www.figma.com/proto/cfyYmc4DeI59tdMpjBXGa0/Breathwrk?node-id=76%3A1032&scaling=scale-down"
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
  loads: PropTypes.arrayOf(PropTypes.object).isRequired,
  finalThoughts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BhukuMain
