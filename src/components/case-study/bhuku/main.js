import * as React from 'react'
import PropTypes from 'prop-types'

import Define from './define'
import Research from './research'
import Design from './design'
import FinalPrototype from '../final-prototype/final-prototype'
import BackgroundSection from '../../util/layout/background-section'
import ContentSection from '../../util/layout/content-section'

const VIDEO_SRC = 'https://www.loom.com/embed/319e54e4491d4c1f92dedf3f52e32c98'
const PROTOTYPE_LINK =
  'https://www.figma.com/proto/rzEpSlku3u3bRzTewmEJUS/Bhuku?node-id=27%3A697&scaling=scale-down'

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
        videoSrc={VIDEO_SRC}
        videoTitle="bhuku-final-prototype-video"
        prototypeLink={PROTOTYPE_LINK}
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
