import * as React from 'react'
import PropTypes from 'prop-types'

import ArrowRight from '../images/svg/arrow-right.inline.svg'

const Layout = ({ title, blurb, children }) => {
  return (
    <div className="self-center flex flex-col-reverse justify-between lg:justify-around lg:flex-row shadow-2xl p-8 py-12 mb-20 rounded-mb">
      <main className="flex-1">{children}</main>
      <div className="flex flex-col justify-center max-w-md mb-10 lg:mb-0">
        <h3 className="font-serif text-4xl">{title}</h3>
        <p className="font-sans text-base">{blurb}</p>
        <button className="group flex self-start items-center no-underline border-b-4 border-orange border-opacity-0 hover:border-opacity-100">
          <span className="mr-6 text-lg font-sans">VIEW CASE STUDY</span>
          <span className="flex transform group-hover:translate-x-3 transition motion-reduce:transition-none motion-reduce:transform-none">
            <ArrowRight />
          </span>
        </button>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
