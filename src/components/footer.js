import * as React from 'react'
import PropTypes from 'prop-types'

import LinkedIn from '../images/svg/icons/linkedin.inline.svg'
import Copyright from '../images/svg/icons/copyright.inline.svg'
import Email from '../images/svg/icons/email.inline.svg'

const Header = ({ email, author, linkedInUrl }) => (
  <footer>
    <div className="flex flex-col justify-center mb-20">
      <h1 className="self-center text-5xl font-serif mb-1">Let's chat!</h1>
      <a
        href={'mailto:' + email}
        className="self-center font-sans border-b-8 border-orange"
      >
        {email}
      </a>
    </div>
    <div className="flex flex-col lg:flex-row justify-start lg:justify-between">
      <div className="font-sans mb-2 items-center flex ">
        <Copyright className="mr-2" />
        <span>{author}</span>
      </div>
      <div className="lg:flex">
        <a
          href={'mailto:' + email}
          className="font-sans mb-2 items-center flex lg:mr-8"
        >
          <Email className="mr-2" />
          <span>{email}</span>
        </a>
        {linkedInUrl && (
          <a href={linkedInUrl} className="font-sans mb-2 items-center flex ">
            <LinkedIn className="mr-2" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  </footer>
)

Header.propTypes = {
  email: PropTypes.string,
  author: PropTypes.string,
  linkedInUrl: PropTypes.string,
}

Header.defaultProps = {
  email: ``,
  author: ``,
  linkedInUrl: ``,
}

export default Header
