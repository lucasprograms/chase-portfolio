import * as React from 'react'
import PropTypes from 'prop-types'

import Blurb from './blurb/blurb'
import TableOfContents from './table-of-contents/table-of-contents'

const Introduction = ({ contents, blurbs, highlight, title }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12" id="introduction">
      <div className="hidden lg:flex flex-col lg:col-span-3">
        <TableOfContents contents={contents} />
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-6 gap-12">
        <h2 className="font-serif text-5xl lg:col-span-6">{title}</h2>

        {blurbs.map(({ title, body }, index) => (
          <Blurb title={title} body={body} key={index} />
        ))}

        {highlight && (
          <a
            className="lg:col-start-4 lg:col-span-3 hover:underline"
            href="#finalPrototype"
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
