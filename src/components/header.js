import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFF`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid #f5f5f5`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `20px 0`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Link
        to='/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/See%27s_Candies_logo.svg/1200px-See%27s_Candies_logo.svg.png'
          width={150}
          quality={95}
          formats={['auto', 'webp', 'png']}
          alt='logo'
        />
      </Link>
      <div
        style={{
          color: `#424242`,
          display: `inline-flex`,
          alignItems: `center`,
          margin: `0 0 0 40px`,
          gap: `40px`,
        }}
      >
        <span>Products</span>
        <span>Packages</span>
        <span>Contact</span>
        <span>Etc.</span>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
