import * as React from 'react'
import BlobHero from '../images/svg/blob-hero.inline.svg'
import AboutBlurb from '../components/about-blurb.js'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="grid grid-cols-1 lg:grid-cols-3 relative">
      <div className="lg:col-span-2 lg:px-20">
        <section className="my-20 flex items-center flex-col lg:flex-row">
          <StaticImage
            src="../images/png/chase.png"
            alt="Chase"
            className="w-48 lg:w-72 mb-5 lg:mb-0"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="flex font-serif text-5xl mb-2">
              Here are some talents I bring to the table:
            </h1>
            <p className="font-sans text-base">
              * Not including my #1 talent, Harry Potter trivia
            </p>
          </div>
        </section>
        <section>
          <AboutBlurb
            title="Listening"
            blurb="As a sexual health educator, I spent seven years diving headfirst into deeply personal conversations with complete strangers. It takes practice to hear what’s being said—not just what you want to hear. I love finding the unlooked-for and unexpected truths in people’s experiences."
          />
          <AboutBlurb
            title="Communicating"
            blurb="Good communication is mostly about asking the right questions, and then (really) listening to the answers. I know how to adapt my communication style and tactics to fit each unique situation so that I can put folks at ease and facilitate meaningful conversation. "
          />
          <AboutBlurb
            title="Organizing"
            blurb="I’m a neatfreak at heart, so I love creating clean, consistent design systems and documentation. No loose assets, no hectic layers panel—just clear, efficient designs that are ready for handoff. "
          />
          <AboutBlurb
            title="Writing &amp; Researching"
            blurb="I spent my college years deep in a writing- and research-intensive major. I can take loads of research and synthesize it into clear, digestible language. My final thesis was one of three papers to be awarded high honors by my department. "
          />
          <AboutBlurb
            title="UX Research Methodologies"
            blurb="As a UX designer, I apply my writing and research skills to each project. Strong research makes me confident I’m basing my designs on actual user needs and designing products that solve real problems."
          />
        </section>
      </div>
      <div className="hidden relative lg:block">
        <BlobHero className="absolute -top-20" />
      </div>
    </div>
  </Layout>
)

export default SecondPage
