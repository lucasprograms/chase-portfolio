import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Introduction from '../components/case-study/introduction/introduction'
import BhukuMain from '../components/case-study/bhuku/main'
import { StaticImage } from 'gatsby-plugin-image'

const contents = [
  { label: 'Introduction', to: 'introduction' },
  { label: 'Defining the Problem', to: 'the_problem' },
  { label: 'Research', to: 'research' },
  { label: 'Design', to: 'design' },
  { label: 'Final Prototype', to: 'prototype' },
]

const introBlurbs = [
  {
    title: 'Introduction',
    body: [
      'In this conceptual project, I created a clean, beautiful, user-centric book-tracking app. Inspired by Goodreads but seeking to remedy its shortcomings, bhuku helps users find the next book they’ll love.',
    ],
  },
  {
    title: 'Role',
    body: [
      'This was a conceptual project',
      'Role: Sole UX/UI Designer',
      'Timeline: 2 weeks',
    ],
  },
  {
    title: 'The Problem',
    body: [
      'For regular readers, finding and choosing new books is a constant, often tiring process. Existing apps exacerbate this problem; they aren’t easy to use, and don’t have enough of a benefit to keep users engaged. ',
    ],
  },
  {
    title: 'The Solution',
    body: [
      'A clean, easy-to-use Android app that provides tangible benefits to the user—incentivizing engagement with personally-tailored book recommendations.',
    ],
  },
]

const HIGHLIGHT_COLOR = '#F2B5B8'

const BACKGROUND_COLOR = '#EAECFE'

const BreathwrkPage = () => {
  return (
    <Layout headerBackgroundColor={BACKGROUND_COLOR}>
      <SEO title="bhuku" />
      <div style={{ backgroundColor: BACKGROUND_COLOR }}>
        <StaticImage
          src="../images/png/bhuku/hero.png"
          alt="breathwrk-hero"
          placeholder="blurred"
        />
      </div>
      <section className="px-5 2xl:px-0 my-10 lg:my-20">
        <Introduction
          title="bhuku"
          contents={contents}
          blurbs={introBlurbs}
          highlight={{
            text: 'Check out the final prototype',
            color: HIGHLIGHT_COLOR,
          }}
        />
      </section>
      <BhukuMain
        highlightColor={HIGHLIGHT_COLOR}
        backgroundColor={BACKGROUND_COLOR}
      />
    </Layout>
  )
}

export default BreathwrkPage
