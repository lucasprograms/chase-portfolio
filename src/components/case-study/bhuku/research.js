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
            To find out, I conducted six user interviews with regular readers. I
            wanted to understand how they found and chose new books to read, and
            how they currently kept track of what they’d read.
          </p>
          <p className="text-base font-sans leading-relaxed mt-10">
            There were two major takeaways from my user interviews. First, the
            folks I spoke with drew their book recommendations from a few key
            places: Goodreads, trusted publications (e.g. the New York Times),
            and from friends and family. Second, each of them had, at some
            point, tried and failed to keep track of their reading.
          </p>
        </div>
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/nk-the-queen.png"
            alt="breathwrk-hero"
            placeholder="blurred"
          />
        </div>
      </div>
      {/* ARRANGEMENT FOR LG SCREENS AND UP */}
      <div className="lg:grid-cols-7 mt-10 hidden lg:grid">
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
      {/* ARRANGEMENT FOR MD SCREENS AND DOWN */}
      <div className="grid mt-5 lg:hidden">
        <p className="font-sans leading-relaxed">
          <span className="text-lg">
            “I’ve been wanting to start keeping track of my books, but it’s sort
            of a daunting task.”
          </span>
          <br />
          <div className="text-center pt-1">
            <span> - Maddy, weak-brained but hot friend</span>
          </div>
        </p>
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/book-info.png"
            alt="breathwrk-hero"
            placeholder="blurred"
          />
        </div>
        <p className="text-base font-sans leading-relaxed">
          <span style={{ backgroundColor: highlightColor }}>
            I wanted to integrate these findings in a way that was mutually
            beneficial: incentivize users to track their past books by using
            their entries to tailor personalized recommendations.
          </span>
        </p>
      </div>
    </section>
  )
}

Define.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
}

export default Define
