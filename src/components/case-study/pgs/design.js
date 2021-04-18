import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'

const Design = ({ title }) => (
  <div id={title.toLowerCase()}>
    <div className="grid lg:grid-cols-2">
      <div className="lg:col-span-2">
        <SectionHeader title="The Design" />
      </div>
      <TextBlock>
        After iterating the sitemap and first round of low-fidelity wireframes
        through client feedback, I finalized a style tile for the redesign and
        began creating high-fidelity mockups.
      </TextBlock>
      <div className="lg:col-span-2">
        <StaticImage
          src="../../../images/png/pgs/design/our-work.png"
          alt="sustainable-future"
          placeholder="blurred"
        />
      </div>
      <div className="lg:col-span-2">
        <StaticImage
          src="../../../images/png/pgs/design/meet-our-team.png"
          alt="sustainable-future"
          placeholder="blurred"
        />
      </div>
      <div className="lg:col-span-2">
        <StaticImage
          src="../../../images/png/pgs/design/homepage.png"
          alt="sustainable-future"
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

export default Design
