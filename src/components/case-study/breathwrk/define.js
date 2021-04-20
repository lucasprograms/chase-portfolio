import * as React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'
import { StaticImage } from 'gatsby-plugin-image'

const Define = ({ title, highlightColor }) => (
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
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-20">
      <div className="col-span-1 flex justify-center items-center">
        <StaticImage
          src="../../../images/png/breathwrk/define/exhale.png"
          alt="sustainable-future"
          placeholder="blurred"
          width={700}
        />
      </div>
      <div className="col-span-1">
        <TextBlock textSize="2xl">
          Turns out, I had a big ol’ bias against gamification.
        </TextBlock>
        <TextBlock>
          Even within the mental health community, I found positive examples of
          gamification being used to treat and manage mental health conditions
          (pretty cool!).
        </TextBlock>
        <TextBlock>
          <span style={{ backgroundColor: highlightColor }}>
            The more I read, I realized that it wasn’t a question of
            gamification or no gamification, but rather the specific features of
            gamification included in an app, and whether they promoted extrinsic
            or intrinsic motivation.
          </span>
        </TextBlock>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-20">
      <div className="col-span-1">
        <div className="flex lg:hidden justify-center">
          <StaticImage
            src="../../../images/png/breathwrk/define/graph-line.png"
            alt="sustainable-future"
            placeholder="blurred"
            width={400}
          />
        </div>
        <TextBlock textSize="2xl">
          To establish long-term habits, motivation has to be intrinsic. That is
          to say, you perform an activity because you enjoy the activity itself.
        </TextBlock>
        <TextBlock>
          For example, some people love to bake—they find the process soothing
          and therapeutic. These folks are intrinsically motivated to bake. I,
          on the other hand, am a terrible, stressed-out baker, but I do it
          because I want the outcome: chocolate chip cookies. I am extrinsically
          motivated to bake.
        </TextBlock>
        <TextBlock>
          So if we want folks to establish a regular breathwork routine in order
          to maximize the app’s benefits, the question becomes:
        </TextBlock>
      </div>
      <div className="col-span-1 hidden lg:flex relative justify-center items-center">
        <StaticImage
          src="../../../images/png/breathwrk/define/graph-line.png"
          alt="sustainable-future"
          placeholder="blurred"
          width={700}
        />
      </div>
    </div>
    <div className="flex justify-center mt-10 lg:mt-20">
      <div style={{ maxWidth: '500px' }} className="text-center inline-block">
        <TextBlock textSize="2xl">
          <span style={{ backgroundColor: highlightColor }}>
            How might we create a feature that allows Breathwrk users to track
            their practice in a way that promotes intrinsic motivation?
          </span>
        </TextBlock>
      </div>
    </div>
  </div>
)

Define.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
}

export default Define
