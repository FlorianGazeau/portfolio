import React from 'react'

import styles from '../styles/Experiences.module.css'

const Jobs = [
  {
    title: "Pandascore",
    post: "Freelance - Data Manager",
    // description: "Pandascore is a startup whose objective is to collect data from sports matches. My role is to verify that the data sent to customers is the right one.",
    date: "january 2018 - present",
  },
  {
    title: "Clinique Juridique Montpelier",
    post: "Freelance - Developer",
    // description: "",
    date: "july 2020",
  },
  {
    title: "Sylphe",
    post: "Stage - Developer",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat consequatur dignissimos a. Mollitia fuga quisquam facere eveniet aperiam, voluptatum aliquam laborum consequatur sint, veniam quis ipsum? Rerum, accusamus incidunt?",
    date: "december 2018 - May 2019",
  },
  {
    title: "42 School Paris",
    post: "Student",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat consequatur dignissimos a. Mollitia fuga quisquam facere eveniet aperiam, voluptatum aliquam laborum consequatur sint, veniam quis ipsum? Rerum, accusamus incidunt?",
    date: "november 2016 - september 2019",
  },
]

export default function Experiences() {

  const card = Jobs.map((job, i) => 
    <div key={i} className={styles.card}>
      <div>
        <div className={styles.flex}>
          <h3>{job.title}</h3>
          <span className={styles.date}>{job.date}</span>
        </div>
        <h4 className={styles.post}>{job.post}</h4>
      </div>
    </div>
  )
  return (
    <section id="section-experiences" className="section">
      <div className="title">
        <h2><span>02.</span> Experiences</h2>        
      </div>
      <div className="content">
       {card}
      </div>
    </section>
  )
}
