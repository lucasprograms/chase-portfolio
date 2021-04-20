import * as React from 'react'
import PropTypes from 'prop-types'

import Define from './define'
import Research from './research'
import Design from './design'
import FinalPrototype from '../final-prototype/final-prototype'
import BackgroundSection from '../../util/layout/background-section'
import ContentSection from '../../util/layout/content-section'

const BhukuMain = ({
  highlightColor,
  backgroundColor,
  loads,
  finalThoughts,
  videoSrc,
  prototypeLink,
}) => {
  return (
    <div>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Define
            title="Define"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
        </ContentSection>
        <ContentSection>
          <Research
            title="Research"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection>
        <ContentSection lgColSpan="10">
          <Design title="Design" />
        </ContentSection>
      </BackgroundSection>
      <FinalPrototype
        videoTitle="bhuku-final-prototype-video"
        videoSrc={videoSrc}
        prototypeLink={prototypeLink}
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
  videoSrc: PropTypes.string.isRequired,
  prototypeLink: PropTypes.string.isRequired,
}

export default BhukuMain
