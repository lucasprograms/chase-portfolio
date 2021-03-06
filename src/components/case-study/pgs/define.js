import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import TextBlock from '../../util/text-block'
import SectionHeader from '../../util/section-header'

const Define = ({ title }) => {
  return (
    <section id={title.toLowerCase()}>
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-6">
          <StaticImage
            src="../../../images/png/pgs/define/sustainable-future.png"
            alt="sustainable-future"
            placeholder="blurred"
          />
        </div>

        <div className="lg:col-span-3 mt-10 lg:mt-20">
          <SectionHeader title="Defining the Problem" />
          <TextBlock>
            PGS has been a recognized leader in the nuclear security field for
            over 20 years, but the expertise and value of the organization
            wasn’t being expressed through their website.
          </TextBlock>
          <TextBlock>
            To understand the situation better, I conducted a{' '}
            <strong>stakeholder interview</strong> with a senior member of PGS’
            staff. I wanted to learn more about their business goals and
            perceived user needs. Here’s what I learned:
          </TextBlock>
          <TextBlock textSize="2xl">
            The organization wants to use their website to clearly communicate
            PGS’ mission and work. It should showcase their years of experience
            and establish credibility, reinforcing their status as a go-to
            source for nuclear security and energy policy commentary and
            recommendations.
          </TextBlock>
        </div>
      </div>
    </section>
  )
}

Define.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Define
