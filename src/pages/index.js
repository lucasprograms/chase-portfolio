import * as React from 'react'
import BlobHero from '../images/svg/blob-hero.inline.svg'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CaseStudy from '../components/case-study/call-to-action'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="px-5 lg:px-0">
      <section
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ height: '920px' }}
      >
        <div className="flex flex-col justify-start lg:justify-center z-10 mt-60 md:mt-80 lg:mt-0">
          <h1 className="text-5xl leading-snug font-serif max-w-md self-center mb-5">
            Hey, I’m Chase—I’m a UX Designer and cat enthusiast.
          </h1>
          <p className="font-sans text-xl leading-relaxed font-normal max-w-md self-center">
            I love listening to and exploring people’s experiences, and using
            what I learn to create products that make them happy.
          </p>
        </div>
        <div
          className="absolute lg:static top-0 left-0 right-0 w-full overflow-hidden"
          style={{ height: '920px' }}
        >
          <BlobHero className="absolute top-0" />
        </div>
      </section>
      <section>
        <CaseStudy
          title="Breathwrk"
          blurb="A habit-tracking feature in line with the scientific community’s current best practices, fitting seamlessly within Breathwrk’s current design."
          href="/breathwrk"
        >
          <StaticImage
            src="../images/png/breathwrk.png"
            alt="breathwrk"
            placeholder="blurred"
            width={700}
          />
        </CaseStudy>
      </section>
      <section>
        <CaseStudy
          title="Partnership for Global Security"
          blurb="A visually engaging responsive website that addresses both the users’ and organization’s goals."
          href="/pgs"
        >
          <StaticImage
            src="../images/png/pgs.png"
            alt="pgs"
            placeholder="blurred"
            width={700}
          />
        </CaseStudy>
      </section>
      <section>
        <CaseStudy
          title="bhuku"
          blurb="A book management app for Android devices with simple, beautiful UI, incentivizing engagement with personally-tailored book recommendations."
          href="/bhuku"
        >
          <StaticImage
            src="../images/png/bhuku.png"
            alt="bhuku"
            placeholder="blurred"
            width={700}
          />
        </CaseStudy>
      </section>
    </div>
  </Layout>
)

export default IndexPage
