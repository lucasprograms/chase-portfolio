import * as React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'
import { StaticImage } from 'gatsby-plugin-image'

const Define = ({ title }) => (
  <div id={title.toLowerCase()}>
    <div className="grid lg:grid-cols-2">
      <div className="col-span-1">
        <SectionHeader title="Defining the Problem" />
        <div className="flex lg:hidden justify-center">
          <StaticImage
            src="../../../images/png/breathwrk/define/leaderboard.png"
            alt="sustainable-future"
            placeholder="blurred"
            width={400}
          />
        </div>
        <TextBlock>
          Breathwrk’s app immediately drew me in. It has simple, punchy UI and,
          unlike most other popular mindfulness apps, it’s super accessible—most
          of the app’s functionality is available even without purchasing the
          “premium” version.
        </TextBlock>
        <TextBlock>
          After exploring Breathwrk’s current “habit” features (which track the
          user’s current streak, best streak, and a leaderboard of the app’s
          users and current rankings),
        </TextBlock>
        <TextBlock textSize="2xl">
          I hypothesized that this gamification of the app ran contrary to the
          company’s mission and goals—
        </TextBlock>
        <TextBlock>
          and that there was a better way to encourage accountability and
          habit-setting, in line with mental health best practices.
        </TextBlock>
      </div>
      <div className="col-span-1 hidden lg:flex relative justify-center items-center">
        <StaticImage
          src="../../../images/png/breathwrk/define/leaderboard.png"
          alt="sustainable-future"
          placeholder="blurred"
          width={700}
        />
      </div>
    </div>
  </div>
)

Define.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Define
