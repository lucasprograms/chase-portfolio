import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

const Define = ({ title, highlightColor }) => {
  return (
    <section id={title.toLowerCase()} className="py-10 lg:py-20">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-serif">{title}</h2>
          <p className="text-base font-sans leading-relaxed mt-10">
            With that in mind, I set out to design the app. I started by
            creating quick sketches of major screens, then created low-fidelity
            wireframes using Material Design for Android devices.
          </p>
        </div>
        <div className="lg:col-span-6 lg:flex justify-center">
          <StaticImage
            src="../../../images/png/bhuku/research/nk-the-queen.png"
            alt="breathwrk-hero"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-7 mt-10">
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/book-info.png"
            alt="breathwrk-hero"
            placeholder="blurred"
          />
        </div>
        <div className="lg:col-start-5 lg:col-span-3">
          <p className="font-sans leading-relaxed mt-10">
            <span className="text-lg">
              “I’ve been wanting to start keeping track of my books, but it’s
              sort of a daunting task.”
            </span>
            <br />
            <div className="text-center pt-1">
              <span> - Maddy, weak-brained but hot friend</span>
            </div>
          </p>
          <p className="text-base font-sans leading-relaxed mt-10">
            <span style={{ backgroundColor: highlightColor }}>
              I wanted to integrate these findings in a way that was mutually
              beneficial: incentivize users to track their past books by using
              their entries to tailor personalized recommendations.
            </span>
          </p>
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
