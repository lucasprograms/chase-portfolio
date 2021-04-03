import * as React from 'react'

import Layout from '../components/layout'
import Introduction from '../components/case-study/introduction/introduction'

const contents = [
  { label: 'Introduction', to: 'introduction' },
  { label: 'Defining the Problem', to: 'the_problem' },
  { label: 'Design Process', to: 'design' },
  { label: 'Final Prototype', to: 'prototype' },
]

const introBlurbs = [
  {
    title: 'Introduction',
    body:
      'Founded in 2019, Breathwrk is an app that provides “a simple yet powerful way to alleviate stress and anxiety, fall asleep faster, energize yourself, or improve endurance.” The app features curated breathwork exercises for a variety of goals and situations, all of which are based on the scientific community’s current best practices. ',
  },
  { title: 'Role', body: 'This was a conceptual project' },
  {
    title: 'The Problem',
    body:
      'Breathwrk needs to reduce its churn rate and maximize its returning users. Right now, Breathwrk’s “habit” features don’t effectively encourage a regular practice.',
  },
  {
    title: 'The Solution',
    body:
      'A habit-tracking feature in line with the scientific community’s current best practices. Fitting seamlessly within Breathwrk’s current design, this feature allows users to maximize the app’s value.',
  },
]

const BreathwrkPage = () => {
  return (
    <Layout>
      <Introduction contents={contents} blurbs={introBlurbs} />
    </Layout>
  )
}

export default BreathwrkPage
