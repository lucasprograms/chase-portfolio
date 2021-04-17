import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Introduction from '../components/case-study/introduction/introduction'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../images/svg/pgs/hero.inline.svg'

const contents = [
  { label: 'Introduction', to: 'introduction' },
  { label: 'Defining the Problem', to: 'the_problem' },
  { label: 'Research & Data', to: 'research_and_data' },
  { label: 'The Designs', to: 'design' },
  { label: 'Final Prototype', to: 'prototype' },
]

const introBlurbs = [
  {
    title: 'Introduction',
    body: [
      'The Partnership for Global Security (PGS) is a nuclear security and energy policy non-profit, working to lead the world to a safer future. With over 20 years of experience, PGS is a recognized international leader and innovator in its field.',
    ],
  },
  {
    title: 'Role',
    body: [
      'Role: Sole UX/UI Designer',
      'Timeline: 3 weeks',
      'Platform: WordPress',
    ],
  },
  {
    title: 'The Problem',
    body: [
      'PGS’ current website isn’t serving their business needs. It has a bounce rate of 71 percent, and isn’t allowing users to engage with the breadth of PGS’ work.',
    ],
  },
  {
    title: 'The Solution',
    body: [
      'A visually engaging responsive website with strong information architecture, allowing users to easily explore PGS’ work and find opportunities to engage with the organization. ',
    ],
  },
]

const BreathwrkPage = () => {
  return (
    <Layout headerColorInverted={true}>
      <SEO title="pgs" />
      <div className="relative" style={{ bottom: '70px' }}>
        <Hero />
      </div>
      <section className="px-5 2xl:px-0 my-10 lg:my-20">
        <Introduction
          contents={contents}
          blurbs={introBlurbs}
          title="Partnership for Global Security"
        />
      </section>
    </Layout>
  )
}

export default BreathwrkPage
