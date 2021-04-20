import * as React from 'react'
import PropTypes from 'prop-types'

import ArrowRight from '../../images/svg/arrow-right.inline.svg'
import { Link } from 'gatsby'

const CaseStudy = ({ title, blurb, children, href }) => {
  return (
    <div className="self-center flex flex-col-reverse justify-between lg:justify-around lg:flex-row shadow-2xl p-8 py-12 mb-20 rounded-mb">
      <main className="flex-1">{children}</main>
      <div className="flex flex-col justify-center max-w-md mb-10">
        <h3 className="font-serif text-4xl mb-5">{title}</h3>
        <p className="font-sans text-lg mb-5">{blurb}</p>

        <Link
          to={href}
          className="group flex self-start items-center no-underline border-b-4 border-orange border-opacity-0 hover:border-opacity-100"
        >
          <span className="mr-6 text-lg font-sans">VIEW CASE STUDY</span>
          <span className="flex transform group-hover:translate-x-3 transition motion-reduce:transition-none motion-reduce:transform-none">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </div>
  )
}

CaseStudy.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
}

export default CaseStudy
