import * as React from 'react'
import { Link } from 'gatsby'
import BlobHero from '../images/svg/blob-hero.inline.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ height: '920px' }}
    >
      <div class="flex flex-col justify-center z-10">
        <h1 className="text-4xl font-serif max-w-md self-center">
          Hey, I’m Chase—I’m a UX Designer and cat enthusiast.{' '}
        </h1>
        <p className="text-2xl max-w-md self-center">
          I love listening to and exploring people’s experiences, and using what
          I learn to create products that make them happy.
        </p>
      </div>
      <div className="absolute lg:static top-0">
        {' '}
        <BlobHero className="absolute top-0" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
