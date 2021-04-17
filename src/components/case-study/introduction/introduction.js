import * as React from 'react'
import PropTypes from 'prop-types'

import Blurb from './blurb/blurb'

const Introduction = ({ blurbs, highlight, title }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 lg:relative lg:bottom-20"
      id="introduction"
    >
      <div className="md:col-start-4 lg:col-start-3 md:col-span-9 grid grid-cols-1 lg:grid-cols-6 gap-12">
        <h2 className="font-serif text-5xl lg:col-span-6">{title}</h2>

        {blurbs.map(({ title, body }, index) => (
          <Blurb title={title} body={body} key={index} />
        ))}

        {highlight && (
          <a
            className="lg:col-start-4 lg:col-span-3 hover:underline"
            href="#prototype"
          >
            <strong
              style={{ backgroundColor: highlight.color }}
              className="px-2 py-1 text-lg"
            >
              {highlight.text}
            </strong>
          </a>
        )}
      </div>
    </div>
  )
}

Introduction.propTypes = {
  contents: PropTypes.array.isRequired,
  blurbs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.object,
}

export default Introduction
