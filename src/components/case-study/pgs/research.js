import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import TextBlock from '../../util/text-block'

import SectionHeader from '../../util/section-header'

const Define = ({ title }) => {
  return (
    <section id={title.toLowerCase()} className="py-10 lg:py-20">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <SectionHeader title="Analyzing the Data" />
          <TextBlock>
            I wanted to compare what I learned in my stakeholder interview to
            the available user data. Diving into PGS’ Google Analytics gave me a
            good understanding of where the main issues lay, and also where to
            focus my redesign efforts. Here were my main takeaways:
          </TextBlock>
        </div>
        <div className="grid lg:grid-cols-6 lg:col-span-6 lg:mt-20">
          <div className="lg:col-span-6 flex flex-col lg:flex-row items-center mt-20">
            <StaticImage
              src="../../../images/png/pgs/research/71-circle.png"
              alt="sustainable-future"
              placeholder="blurred"
              width={160}
              height={160}
            />
            <span className="text-2xl ml-0 lg:ml-5 mt-5 lg:mt-0 text-center lg:text-left">
              The site had a 71% bounce rate.
            </span>
          </div>
          <div className="lg:col-span-4 lg:col-start-3 flex flex-col lg:flex-row items-center mt-20">
            <StaticImage
              src="../../../images/png/pgs/research/76-circle.png"
              alt="sustainable-future"
              placeholder="blurred"
              width={160}
              height={160}
            />
            <span
              className="text-2xl ml-0 lg:ml-5 mt-5 lg:mt-0 text-center lg:text-left"
              style={{ maxWidth: '400px' }}
            >
              On top of that, 76% of the site’s session over the last calendar
              year had lasted 10 seconds or less.
            </span>
          </div>
          <div className="lg:col-span-6 flex flex-col lg:flex-row items-center mt-20">
            <StaticImage
              src="../../../images/png/pgs/research/50-circle.png"
              alt="sustainable-future"
              placeholder="blurred"
              width={160}
              height={160}
            />
            <span
              className="text-2xl ml-0 lg:ml-5 mt-5 lg:mt-0 text-center lg:text-left"
              style={{ maxWidth: '400px' }}
            >
              The homepage, the entry page for more than half of the site’s
              visitors, also had an exit rate of 50%.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

Define.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Define
