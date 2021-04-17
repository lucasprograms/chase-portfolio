import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Introduction from '../components/case-study/introduction/introduction'
import BreathwrkMain from '../components/case-study/breathwrk/main'
import { StaticImage } from 'gatsby-plugin-image'

const contents = [
  { label: 'Introduction', to: 'introduction' },
  { label: 'Defining the Problem', to: 'the_problem' },
  { label: 'Design Process', to: 'design' },
  { label: 'Final Prototype', to: 'prototype' },
]

const introBlurbs = [
  {
    title: 'Introduction',
    body: [
      'Founded in 2019, Breathwrk is an app that provides “a simple yet powerful way to alleviate stress and anxiety, fall asleep faster, energize yourself, or improve endurance.” The app features curated breathwork exercises for a variety of goals and situations, all of which are based on the scientific community’s current best practices. ',
    ],
  },
  {
    title: 'Role',
    body: [
      'This was a conceptual project',
      'Role: Sole UX/UI Designer',
      'Timeline: 3 weeks',
    ],
  },
  {
    title: 'The Problem',
    body: [
      'Breathwrk needs to reduce its churn rate and maximize its returning users. Right now, Breathwrk’s “habit” features don’t effectively encourage a regular practice.',
    ],
  },
  {
    title: 'The Solution',
    body: [
      'A habit-tracking feature in line with the scientific community’s current best practices. Fitting seamlessly within Breathwrk’s current design, this feature allows users to maximize the app’s value.',
    ],
  },
]

const loads = [
  {
    title: 'Research',
    items: [
      'Secondary Research',
      'Competitive Analysis',
      'User Survey',
      'User Interviews',
    ],
  },
  {
    title: 'UX Design',
    items: [
      'Persona',
      'Feature Roadmap',
      'Low-fi Sketch Ideation',
      'Low-fi Wireframes',
      'Wireflow',
      'Prototyping',
    ],
  },
  {
    title: 'UI Design',
    items: ['Style Tile', 'UI Kit', 'Hi-Fi Mockups'],
  },
  {
    title: 'Testing',
    items: ['User Testing', 'UX Iterations'],
  },
]

const finalThoughts = [
  'This project was a ton of fun—diving deep into research mode, learning about patterns of human behavior and then translating it into a feature. My goal, in line with ethical design principles, was to create a habit-setting feature that allows users to maximize the product’s value in their lives—not just to keep users on the app. ',
  'There are so many fun ways to expand and improve upon this project, like connecting with a wider array of Breathwrk’s users to expanding testing and research, or incorporating other intrinsic motivators into the feature, like a buddy system or a post-session emotional check-in. ',
]

const HIGHLIGHT_COLOR = '#F7ECA0'

const BACKGROUND_COLOR = '#E2E1F1'

const BreathwrkPage = () => {
  return (
    <Layout headerBackgroundColor={BACKGROUND_COLOR}>
      <SEO title="breathwrk" />
      <div style={{ backgroundColor: BACKGROUND_COLOR }}>
        <StaticImage
          src="../images/png/breathwrk/hero.png"
          alt="breathwrk-hero"
          placeholder="blurred"
        />
      </div>
      <section className="px-5 2xl:px-0 my-10 lg:my-20">
        <Introduction
          title="breathwrk"
          contents={contents}
          blurbs={introBlurbs}
          highlight={{
            text: 'Check out the final prototype',
            color: HIGHLIGHT_COLOR,
          }}
        />
      </section>
      <BreathwrkMain
        highlightColor={HIGHLIGHT_COLOR}
        backgroundColor={BACKGROUND_COLOR}
        loads={loads}
        finalThoughts={finalThoughts}
      />
    </Layout>
  )
}

export default BreathwrkPage
