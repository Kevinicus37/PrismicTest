import React from 'react'
import { RichText } from 'prismic-reactjs'

const TopBanner = ({ slice }) => (
  <section className="top-banner">
    <style jsx>{`
      .top-banner {
        font-family: 'Lato', sans-serif;
        margin: -70px 0 80px;
        padding: 6em 0 6em;
        background-position: center center;
        background-size: cover;
        color: #ffffff;
        line-height: 1.75;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${ slice.primary.background.url });
      }`}</style>
  </section>
)

export default TopBanner