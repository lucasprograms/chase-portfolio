import * as React from 'react'
import PropTypes from 'prop-types'
import TextBlock from '../../util/text-block'
import SectionHeader from '../../util/section-header'
import { StaticImage } from 'gatsby-plugin-image'

const Research = ({ highlightColor, title }) => (
  <div id={title.toLowerCase()}>
    <div className="grid lg:grid-cols-2">
      <div className="col-span-1">
        <SectionHeader title="A Research-Driven Design Process" />

        <TextBlock>
          I wanted to validate my secondary research through user research. I
          conducted competitive analysis, a user survey, and user interviews.{' '}
          <span style={{ backgroundColor: highlightColor }}>
            Here’s how what I found in my research informed each design decision
            I made:
          </span>
        </TextBlock>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-32">
      <div className="col-span-1">
        <h4 className="text-2xl font-serif mb-5 flex items-center">
          <span style={{ color: '#FF0000' }} className="mr-2">
            &#10006;
          </span>{' '}
          The Before
        </h4>
        <div className="col-span-1 flex items-center">
          <StaticImage
            src="../../../images/png/breathwrk/research/before-streak.png"
            alt="sustainable-future"
            placeholder="blurred"
            height={700}
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h6 className="text-lg font-serif">Streaks</h6>
        <TextBlock>
          In my secondary research, I found that extrinsic motivators like
          streaks can actually interfere with intrinsic motivation, especially
          when that extrinsic reinforcement is discontinued.{' '}
          <span style={{ backgroundColor: highlightColor }}>
            Streaks can turn a peaceful, enjoyable activity like breathwork into
            an obligation attached to an external reward.
          </span>
        </TextBlock>
        <TextBlock>
          Among the user survey respondents, most (57.9%) were ambivalent about
          streaks. Those who were impacted were evenly split between becoming
          more motivated by the loss of a streak (3/20) and less motivated
          (3/20).
        </TextBlock>
        <TextBlock>
          Additionally, over 50% of respondents (11/20) named competition with
          themselves to be not important or not important at all. The remaining
          participants were split between moderately important (6/20) and
          important (2/20), with only one participant naming it really
          important. Check out the “After” section to see how I incorporated a
          “Challenge Mode” to appease both types of users.
        </TextBlock>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-32">
      <div className="col-span-1">
        <div className="flex lg:hidden justify-center">
          <StaticImage
            src="../../../images/png/breathwrk/research/leaderboard.png"
            alt="sustainable-future"
            placeholder="blurred"
            height={700}
          />
        </div>
        <h6 className="text-lg font-serif mt-10 lg:mt-0">Leaderboard</h6>
        <TextBlock>
          According to the fancy-sounding Organismic Integration Theory,
          low-autonomy extrinsic motivators have the most harmful impact on
          intrinsic motivation. While there is some autonomy in a leaderboard
          feature, the average Breathwrk user isn’t going to reach 2855 minutes
          per month (the current top user’s number).
        </TextBlock>
        <TextBlock textSize="2xl">
          Additionally, 100% of respondents said that competition with others is
          either not important or not important at all to their practice.
        </TextBlock>
      </div>
      <div className="col-span-1 hidden lg:flex relative justify-center items-center">
        <StaticImage
          src="../../../images/png/breathwrk/research/leaderboard.png"
          alt="sustainable-future"
          placeholder="blurred"
          height={700}
        />
      </div>
    </div>
  </div>
)

Research.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
}

export default Research
