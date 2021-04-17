import * as React from 'react'
import PropTypes from 'prop-types'

const TableOfContents = ({ contents }) => {
  const listItems = contents.map((content) => (
    <div className="hidden lg:flex flex-col lg:col-span-2" key={content.to}>
      <a href={content.to} className="text-lg font-sans mb-5 hover:underline">
        {content.label}
      </a>
    </div>
  ))

  return <ul>{listItems}</ul>
}

TableOfContents.propTypes = {
  contents: PropTypes.array.isRequired,
}

export default TableOfContents
