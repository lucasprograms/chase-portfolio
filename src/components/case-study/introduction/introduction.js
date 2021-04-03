import * as React from 'react'
import PropTypes from 'prop-types'

import Blurb from './blurb/blurb'
import TableOfContents from './table-of-contents/table-of-contents'

const Introduction = ({ contents, blurbs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8">
      <div className="hidden lg:flex flex-col lg:col-span-2">
        <TableOfContents contents={contents} />
      </div>
      <div className="lg:col-span-6 grid grid-cols-1 lg:grid-cols-6 gap-12">
        <h2 className="font-serif text-5xl lg:col-span-6">Breathwrk</h2>

        {blurbs.map(({ title, body }) => (
          <Blurb title={title} body={body} />
        ))}
      </div>
    </div>
  )
}

Introduction.propTypes = {
  contents: PropTypes.array.isRequired,
  blurbs: PropTypes.array.isRequired,
}

export default Introduction
