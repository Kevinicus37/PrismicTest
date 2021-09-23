import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Date as ParseDate } from 'prismic-reactjs'

const FunWithDates = ({ slice }) => {
  let date = ParseDate(slice.primary.datePicker);
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit" 
  }).format(date);
  return (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    <span >{formattedDate}</span>
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
  </section>);
}

export default FunWithDates