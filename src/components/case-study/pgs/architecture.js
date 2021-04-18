import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'

const Architecture = () => (
  <div>
    <SectionHeader title="Information Architecture" />
    <div className="grid lg:grid-cols-6">
      <div className="lg:col-span-3">
        <TextBlock>
          I knew that the company’s goal was to communicate their work and
          expertise, and to cement their status as a go-to leader in their
          field. While I wasn’t able to talk directly with users due to the
          project’s constraints, the data available allowed me to infer a few
          user goals.
        </TextBlock>
      </div>
      <div className="lg:col-span-3" />
      <div className="lg:col-span-3">
        <TextBlock>
          While users wanted to understand PGS’ work—the homepage and the
          organization’s “Overview” page were the 1st and 4th most popular
          pages, respectively—
        </TextBlock>
      </div>
      <div className="lg:col-span-4">
        <TextBlock textSize="2xl">
          the bounce rate and the average session duration suggested that users
          weren’t willing to spend time exploring the site—PGS had precious few
          seconds to capture their attention.
        </TextBlock>
      </div>
      <div className="lg:col-span-3">
        <TextBlock>
          After conducting a site inventory, prioritizing content and finishing
          a sitemap, I created low-fidelity wireframes.
        </TextBlock>
      </div>
      <div className="lg:col-span-6 mt-10 lg:mt-20">
        <StaticImage
          src="../../../images/png/pgs/architecture/wireframe.png"
          alt="sustainable-future"
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

export default Architecture
