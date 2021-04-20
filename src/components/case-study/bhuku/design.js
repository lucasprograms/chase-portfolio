import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'

const Design = ({ title }) => {
  return (
    <section id={title.toLowerCase()} className="py-10 lg:py-20">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3 pr-5 2xl:pr-0">
          <SectionHeader title={title} />
          <TextBlock>
            With that in mind, I set out to design the app. I started by
            creating quick sketches of major screens, then created low-fidelity
            wireframes using Material Design for Android devices.
          </TextBlock>
        </div>
        <div className="lg:col-span-6 flex justify-end mt-10">
          <StaticImage
            src="../../../images/png/bhuku/design/sketches.png"
            alt="bhuku-sketches"
            placeholder="blurred"
          />
        </div>
        <div className="grid lg:col-span-6 lg:grid-cols-6 lg:mt-20">
          <div className="hidden lg:flex lg:col-span-3 pr-5 2xl:pr-0">
            <StaticImage
              src="../../../images/png/bhuku/design/author-profile.png"
              alt="bhuku-author-profile"
              placeholder="blurred"
              width={400}
            />
          </div>
          <div className="lg:col-span-3 pr-5 2xl:pr-0 my-auto">
            <TextBlock>
              Within the standards set by Material Design, I created the app’s
              branding and UI. Pulling from my user interviews, where the most
              common resources were sites like the New York Times and the New
              Yorker, I wanted to create a clean, simple, and inviting design.
            </TextBlock>
            <TextBlock>
              With my UI kit created, I started designing high-fidelity mockups
              of the app’s major screens. At each stage, I iterated the designs
              through feedback from my Designlab mentors and peers. For my final
              prototype, I also conducted user testing to determine needed
              iterations.
            </TextBlock>
          </div>
        </div>
        <div className="lg:col-span-6">
          <StaticImage
            src="../../../images/png/bhuku/design/final-frames.png"
            alt="bhuku-sketches"
            placeholder="blurred"
            height={700}
          />
        </div>
      </div>
    </section>
  )
}

Design.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Design
