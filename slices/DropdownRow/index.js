import React from 'react'
import { RichText } from 'prismic-reactjs'

const DropdownRow = ({ slice }) => (
  <section>
    <span className="image">
      {
      // <img
      //   src={slice.primary.featuredImage.url}
      //   alt={slice.primary.featuredImage.alt}
      // />
      }
    </span>
    {console.log(slice.dropdowns)}
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default DropdownRow