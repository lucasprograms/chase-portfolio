import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import CircleSeventyOne from '../../../images/svg/pgs/circle-seventy-one.inline.svg'
import CircleSeventySix from '../../../images/svg/pgs/circle-seventy-six.inline.svg'
import CircleFifty from '../../../images/svg/pgs/circle-fifty.inline.svg'

const Define = ({ title, highlightColor }) => {
  return (
    <section id={title.toLowerCase()} className="py-10 lg:py-20">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-serif">Analyzing the Data</h2>
          <p className="text-base font-sans leading-relaxed mt-10">
            I wanted to compare what I learned in my stakeholder interview to
            the available user data. Diving into PGS’ Google Analytics gave me a
            good understanding of where the main issues lay, and also where to
            focus my redesign efforts. Here were my main takeaways:
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:col-span-6 mt-20">
          <div className="lg:col-span-2 flex items-center mt-20">
            <CircleSeventyOne />
            <span className="text-2xl ml-5">
              The site had a 71% bounce rate.
            </span>
          </div>
          <div className="lg:col-span-2 lg:col-start-2 flex items-center mt-20">
            <CircleSeventySix />
            <span className="text-2xl ml-5">
              On top of that, 76% of the site’s session over the last calendar
              year had lasted 10 seconds or less.
            </span>
          </div>
          <div className="lg:col-span-2 flex items-center mt-20">
            <CircleFifty />
            <span className="text-2xl ml-5">
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
  highlightColor: PropTypes.string.isRequired,
}

export default Define
