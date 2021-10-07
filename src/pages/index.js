import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <StaticImage
      src='https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/93876045_10158291794055645_8735306380132483072_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=fTxnj2h9VQEAX-I8wYY&_nc_ht=scontent.fprg5-1.fna&oh=665ab8a5acd0b4bb2bee14b98441b138&oe=61839118'
      // width={}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt='A Gatsby astronaut'
      style={{ marginBottom: `1.45rem`, opacity: `0.4`, width: `100%` }}
    />
    <h1>Welcome to See's Candies</h1>
    <p>
      See's Candies is an American manufacturer and distributor of candy, particularly chocolates.
      It was founded by Charles See, his wife Florence, and his mother Mary in Los Angeles,
      California in 1921. The company is now headquartered in South San Francisco, California.
    </p>
  </Layout>
)

export default IndexPage
