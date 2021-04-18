import * as React from 'react'
import PropTypes from 'prop-types'

import FinalPrototype from '../final-prototype/final-prototype'
import Define from './define'
import Design from './design'
import Research from './research'
import Architecture from './architecture'
import BackgroundSection from '../../util/layout/background-section'
import ContentSection from '../../util/layout/content-section'

const PgsMain = ({ backgroundColor, loads, finalThoughts }) => {
  return (
    <div>
      <BackgroundSection>
        <ContentSection>
          <Define title="Define" />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Research title="Research" />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection>
        <ContentSection>
          <Architecture title="Architecture" />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Design title="Design" />
        </ContentSection>
      </BackgroundSection>
      <FinalPrototype loads={loads} finalThoughts={finalThoughts} />
    </div>
  )
}

PgsMain.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  loads: PropTypes.arrayOf(PropTypes.object).isRequired,
  finalThoughts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PgsMain
