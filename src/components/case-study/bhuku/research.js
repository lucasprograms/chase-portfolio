import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import SectionHeader from '../../util/section-header'
import TextBlock from '../../util/text-block'
import Quote from '../../util/quote'

const Define = ({ title, highlightColor }) => {
  return (
    <section id={title.toLowerCase()} className="py-10 lg:py-20">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <SectionHeader title={title} />
          <TextBlock>
            To find out, I conducted six user interviews with regular readers. I
            wanted to understand how they found and chose new books to read, and
            how they currently kept track of what they’d read.
          </TextBlock>
          <TextBlock>
            There were two major takeaways from my user interviews. First, the
            folks I spoke with drew their book recommendations from a few key
            places: Goodreads, trusted publications (e.g. the New York Times),
            and from friends and family. Second, each of them had, at some
            point, tried and failed to keep track of their reading.
          </TextBlock>
        </div>
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/nk-the-queen.png"
            alt="nk-jemisin"
            placeholder="blurred"
          />
        </div>
      </div>
      {/* ARRANGEMENT FOR LG SCREENS AND UP */}
      <div className="lg:grid-cols-7 mt-10 hidden lg:grid">
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/book-info.png"
            alt="bhuku-bok-info"
            placeholder="blurred"
          />
        </div>
        <div className="lg:col-start-5 lg:col-span-3">
          <Quote
            text="“I’ve been wanting to start keeping track of my books, but it’s
            sort of a daunting task.”"
            name="Maddy"
          />

          <TextBlock>
            <span style={{ backgroundColor: highlightColor }}>
              I wanted to integrate these findings in a way that was mutually
              beneficial: incentivize users to track their past books by using
              their entries to tailor personalized recommendations.
            </span>
          </TextBlock>
        </div>
      </div>
      {/* ARRANGEMENT FOR MD SCREENS AND DOWN */}
      <div className="grid mt-5 lg:hidden">
        <Quote
          text="“I’ve been wanting to start keeping track of my books, but it’s
            sort of a daunting task.”"
          name="Maddy"
        />
        <div className="lg:col-span-3">
          <StaticImage
            src="../../../images/png/bhuku/research/book-info.png"
            alt="bhuku-book-info"
            placeholder="blurred"
          />
        </div>
        <TextBlock>
          <span style={{ backgroundColor: highlightColor }}>
            I wanted to integrate these findings in a way that was mutually
            beneficial: incentivize users to track their past books by using
            their entries to tailor personalized recommendations.
          </span>
        </TextBlock>
      </div>
    </section>
  )
}

Define.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
}

export default Define
