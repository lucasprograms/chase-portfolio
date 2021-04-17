import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

const Define = ({ title, highlightColor }) => {
  return (
    <section id={title.toLowerCase()}>
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-serif">{title}</h2>
          <p className="text-base font-sans leading-relaxed mt-10">
            I’m an avid reader; I was drawn to the idea of streamlining the book
            searching & tracking process. There were two things I wanted to
            avoid: designing something unnecessary, and designing for myself.
          </p>
          <p className="text-base font-sans leading-relaxed mt-10">
            To avoid the former, I conducted a thorough competitive analysis to
            look for opportunities within the field. For the latter, I
            facilitated a set of user interviews.&nbsp;
            <span className="px-1" style={{ backgroundColor: highlightColor }}>
              Even in a conceptual project, I always want to draw directly from
              research.
            </span>
          </p>
        </div>
        <div className="lg:col-span-3 hidden lg:flex justify-end">
          <StaticImage
            src="../../../images/png/bhuku/define/popular-in-fiction.png"
            alt="popular-in-fiction"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-7 mt-10">
        <div className="lg:col-span-3 flex justify-center">
          <StaticImage
            src="../../../images/png/bhuku/define/goodreads.png"
            alt="goodreads"
            placeholder="blurred"
          />
        </div>
        <div className="lg:col-start-5 lg:col-span-3">
          <p className="text-base font-sans leading-relaxed mt-10">
            The market is overshadowed by{' '}
            <a href="//goodreads.com" target="_blank" rel="noreferrer">
              goodreads.com
            </a>
            . The site has remained dominant because of its enormous user base,
            and access to Amazon’s data. But, because Goodread’s site is so
            counterintuitive, glitchy, and poorly designed, there is still space
            for competitors to attract defectors.
          </p>
          <p className="text-base font-sans leading-relaxed mt-10">
            In my eyes, the key was providing enough of a tangible benefit to:
            <br />
            1) keep users engaged with the app
            <br />
            2) pull them away from Goodreads.
          </p>
        </div>
        <div className="lg:col-span-7 mt-10 flex justify-center">
          <div
            style={{ maxWidth: '500px' }}
            className="text-center inline-block"
          >
            <span
              className="text-2xl"
              style={{ backgroundColor: highlightColor }}
            >
              How might we allow users to easily keep track of and search for
              books, while minimizing effort and maximizing benefit?
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
