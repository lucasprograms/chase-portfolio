import * as React from 'react'
import BlobHero from '../images/svg/blob-hero.inline.svg'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CaseStudy from '../components/case-study'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ height: '920px' }}
    >
      <div className="flex flex-col justify-center z-10">
        <h1 className="text-5xl font-serif max-w-md self-center">
          Hey, I’m Chase—I’m a UX Designer and cat enthusiast.{' '}
        </h1>
        <p className="font-sans text-2xl max-w-md self-center">
          I love listening to and exploring people’s experiences, and using what
          I learn to create products that make them happy.
        </p>
      </div>
      <div className="absolute lg:static top-0">
        <BlobHero className="absolute top-0" />
      </div>
    </section>
    <section>
      <CaseStudy
        title="Breathwrk"
        blurb="A habit-tracking feature in line with the scientific community’s current best practices, fitting seamlessly within Breathwrk’s current design."
      >
        <StaticImage src="../images/png/breathwrk.png" alt="breathwrk" />
      </CaseStudy>
    </section>
    <section>
      <CaseStudy
        title="bhuku"
        blurb="Nostrud veniam non minim duis consequat laboris ut officia fugiat esse. Ut culpa amet ea sit. Reprehenderit ex consequat sit fugiat elit sunt elit."
      >
        <StaticImage src="../images/png/bhuku.png" alt="bhuku" />
      </CaseStudy>
    </section>
  </Layout>
)

export default IndexPage
