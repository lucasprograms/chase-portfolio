import * as React from 'react'
import PropTypes from 'prop-types'

import TextBlock from '../../util/text-block'
import { StaticImage } from 'gatsby-plugin-image'
import Quote from '../../util/quote'

const Design = ({ title, highlightColor }) => (
  <div id={title.toLowerCase()}>
    <div className="grid lg:grid-cols-2">
      <div className="col-span-1">
        <h4 className="text-2xl font-serif mb-5 flex items-center">
          <span style={{ color: '#00D715' }} className="mr-2">
            &#10004;
          </span>{' '}
          The After
        </h4>
        <div className="col-span-1 flex items-center justify-center lg:justify-start">
          <StaticImage
            src="../../../images/png/breathwrk/design/habit-home.png"
            alt="final-breathwrk"
            placeholder="blurred"
            height={700}
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h6 className="text-2xl font-serif mt-10 lg:mt-0">
          Why a calendar tracker?
        </h6>
        <TextBlock>
          Tailoring habit setting features to the user’s preference (in this
          case, allowing them to set their own goals and schedule) increases
          intrinsic motivation.
        </TextBlock>
        <TextBlock textSize="2xl">
          Being reminded of, and keeping track of, habit progress was also the
          most commonly reported method of effective goal-setting among survey
          respondents (11/20).
        </TextBlock>
        <TextBlock>
          Additionally, one of the most common reasons for losing motivation
          among survey respondents was when the activity garnered no tangible
          benefits.{' '}
          <span style={{ backgroundColor: highlightColor }}>
            Breathwrk is most effective when practiced regularly, so it’s
            important for users to establish a strong habit to notice benefits.
          </span>
        </TextBlock>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 lg:gap-x-32">
      <div className="col-span-1 lg:col-span-2">
        <h6 className="text-xl font-serif mt-10">Notification Feature</h6>
      </div>
      <div className="col-span-1">
        <TextBlock>
          Breathwrk already has an awesome built-in notification feature, where
          users can choose times of day to receive prompts. I kept this feature
          and incorporated it into the calendar tracker.
        </TextBlock>
      </div>
      <div className="col-span-1 lg:flex lg:items-center mt-10 lg:mt-0">
        <StaticImage
          src="../../../images/png/breathwrk/design/notification.png"
          alt="breathwrk-notification"
          placeholder="blurred"
          height={100}
        />
      </div>
      <div className="col-span-1 lg:col-span-2 lg:mt-10 flex justify-center">
        <Quote
          text="“I like the notifications. Because just as I was feeling my midday
            slump it said: ‘Need a breath?’”"
          name="Lindsey"
        />
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-20 gap-x-20">
      <div className="col-span-1 lg:col-span-2">
        <h6 className="text-xl font-serif mt-10">Data Visualization</h6>
      </div>
      <div className="col-span-1">
        <TextBlock>
          When folks are approaching their goal, people who are able to easily
          visualize their goal are more motivated and commited than those who
          can’t.
        </TextBlock>
        <TextBlock>
          I included only high-autonomy extrinsic motivators in my data
          visualizations, each of which the user is able to easily influence
          through participation.
        </TextBlock>
      </div>
      <div className="col-span-1 mt-10 lg:mt-0">
        <StaticImage
          src="../../../images/png/breathwrk/design/awake.png"
          alt="breathwrk-awake"
          placeholder="blurred"
          height={200}
        />

        <Quote
          text="“It makes me feel good to be able to check something off.”"
          name="Daniel"
        />
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-20 gap-x-20">
      <div className="col-span-1 hidden lg:block">
        <StaticImage
          src="../../../images/png/breathwrk/design/finished-visual.png"
          alt="breathwrk-finished-visual"
          placeholder="blurred"
          height={350}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <StaticImage
          src="../../../images/png/breathwrk/design/awake-progress.png"
          alt="breathwrk-awake-progress"
          placeholder="blurred"
          height={200}
        />

        <Quote
          text="“It's so satisfying—I need to fill the bar every week just so I can finish it and cross it off.” "
          name="Hannah"
        />
      </div>
      <div className="col-span-1 lg:hidden mt-10 flex justify-center">
        <StaticImage
          src="../../../images/png/breathwrk/design/finished-visual.png"
          alt="breathwrk-finished-visual"
          placeholder="blurred"
          height={350}
        />
      </div>
    </div>
    <div className="grid lg:grid-cols-2 mt-10 lg:mt-20 gap-x-20">
      <div className="col-span-1">
        <h6 className="text-xl font-serif mt-10">Challenge Mode</h6>
        <TextBlock>
          Due to the constraints of the project, I wasn’t able to dig into
          user’s preferences around streaks and levels. I knew that none of my
          respondents were into competition with others (which allowed me to nix
          the leaderboard), but users had much more varied opinions on
          self-competition.
        </TextBlock>
        <TextBlock textSize="2xl">
          I decided to incorporate a “Challenge Mode” option for users who
          enjoyed self-competition.
        </TextBlock>
        <TextBlock>
          Challege Mode activates a fourth tab, named “Stats,” in your habit
          tracker. I kept Breathwrk’s current streak and levels tracker, and
          added a simple comparative graph to replace the leaderboard.
        </TextBlock>
        <TextBlock>
          This way, folks can tailor their habit-tracker to whatever helps them
          stay the most motivated.
        </TextBlock>
      </div>
      <div className="col-span-1 mt-10 lg:mt-0 flex justify-center">
        <StaticImage
          src="../../../images/png/breathwrk/design/challenge-mode.png"
          alt="challenge-mode"
          placeholder="blurred"
          height={700}
        />
      </div>
    </div>
  </div>
)

Design.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
}

export default Design
