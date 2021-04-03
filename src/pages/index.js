import * as React from 'react'
import BlobHero from '../images/svg/blob-hero.inline.svg'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CaseStudy from '../components/case-study/call-to-action'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ height: '920px' }}
    >
      <div className="flex flex-col justify-start lg:justify-center z-10 mt-60 md:mt-80 lg:mt-0">
        <h1 className="text-5xl font-serif max-w-md self-center mb-5">
          Hey, I’m Chase—I’m a UX Designer and cat enthusiast.
        </h1>
        <p className="font-sans text-2xl max-w-md self-center">
          I love listening to and exploring people’s experiences, and using what
          I learn to create products that make them happy.
        </p>
      </div>
      <div
        className="absolute lg:static top-0 left-0 right-0 w-full overflow-x-hidden"
        style={{ height: '920px' }}
      >
        <BlobHero className="absolute top-0" />
      </div>
    </section>
    <section>
      <CaseStudy
        title="Breathwrk"
        blurb="A habit-tracking feature in line with the scientific community’s current best practices, fitting seamlessly within Breathwrk’s current design."
        href="//www.figma.com/file/401B4AhQZSy0RdMfTGlafp/Portfolio?node-id=529%3A0"
      >
        <StaticImage
          src="../images/png/breathwrk.png"
          alt="breathwrk"
          placeholder="blurred"
        />
      </CaseStudy>
    </section>
    <section>
      <CaseStudy
        title="bhuku"
        blurb="A habit-tracking feature in line with the scientific community’s current best practices, fitting seamlessly within Breathwrk’s current design."
        href="//www.figma.com/file/401B4AhQZSy0RdMfTGlafp/Portfolio?node-id=633%3A193"
      >
        <StaticImage
          src="../images/png/bhuku.png"
          alt="bhuku"
          placeholder="blurred"
        />
      </CaseStudy>
    </section>
  </Layout>
)

export default IndexPage
