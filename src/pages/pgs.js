import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Introduction from '../components/case-study/introduction/introduction'
import { StaticImage } from 'gatsby-plugin-image'
import PgsMain from '../components/case-study/pgs/main'
import TableOfContents from '../components/case-study/introduction/table-of-contents/table-of-contents'

const contents = [
  { label: 'Introduction', to: 'introduction' },
  { label: 'Defining the Problem', to: 'define' },
  { label: 'Research & Data', to: 'research' },
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

const loads = [
  {
    title: 'Research',
    items: [
      'Stakeholder Interview',
      'Heuristic Evaluation',
      'Analytics Review',
    ],
  },
  {
    title: 'UX Design',
    items: ['Content Inventory', 'Sitemap', 'Low-fi Wireframes'],
  },
  {
    title: 'UI Design',
    items: ['Style Tile', 'UI Kit', 'Hi-Fi Mockups', 'Prototyping'],
  },
  {
    title: 'Testing',
    items: ['User Testing', 'UX Iterations'],
  },
]

const finalThoughts = [
  'This project allowed me to use user data to evaluate the site’s performance, and use what I learned to create a redesign that served the interests of the users and the organization.',
  'If you’re interested in learning more about how I balance client desires & user needs, or how I approach website redesigns, get in touch!',
]

const BACKGROUND_COLOR = '#F2F6FF'

const HIGHLIGHT_COLOR = '#FFFFFF'

const BreathwrkPage = () => {
  return (
    <Layout headerColorInverted={true}>
      <SEO title="pgs" />
      <div className="relative" style={{ bottom: '70px' }}>
        <StaticImage
          src="../images/png/pgs/hero.png"
          alt="pgs-hero"
          placeholder="blurred"
        />
      </div>
      <div className="mt-20">
        <TableOfContents contents={contents} />
        <section className="px-5 2xl:px-0 my-10 lg:mb-0 lg:mt-20">
          <Introduction
            contents={contents}
            blurbs={introBlurbs}
            title="Partnership for Global Security"
          />
        </section>
        <PgsMain
          highlightColor={HIGHLIGHT_COLOR}
          backgroundColor={BACKGROUND_COLOR}
          loads={loads}
          finalThoughts={finalThoughts}
        />
      </div>
    </Layout>
  )
}

export default BreathwrkPage
