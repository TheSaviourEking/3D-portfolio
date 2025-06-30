import React from 'react'
import { Timeline } from '../components/ui/Timeline'
import { experiences } from '../constants'

const sampleData = [
  {
    title: "TechCorp",
    job: "Senior Software Engineer",
    date: "2023 - Present",
    contents: [
      "Led development of a scalable microservices architecture using Node.js and Docker.",
      "Collaborated with cross-functional teams to define, design, and deliver new features.",
      "Improved application performance by optimizing database queries and implementing caching strategies.",
      "Mentored junior developers and contributed to internal documentation and code standards."
    ]
  },
  {
    title: "InnovateX",
    job: "Full Stack Developer",
    date: "2021 - 2023",
    contents: [
      "Built responsive UIs using React and TailwindCSS for high-traffic web applications.",
      "Integrated RESTful APIs and third-party services such as Stripe and Firebase.",
      "Developed backend logic in Python using Flask and PostgreSQL for data management.",
      "Played a key role in migrating legacy systems to modern cloud-based solutions on AWS."
    ]
  },
  {
    title: "StartUp Studio",
    job: "Frontend Developer Intern",
    date: "2020 - 2021",
    contents: [
      "Assisted in developing user interfaces for early-stage startup products.",
      "Implemented pixel-perfect designs using HTML, CSS, and JavaScript.",
      "Worked closely with UX designers to improve user experience through iterative feedback.",
      "Gained hands-on experience with version control using Git and project tracking via Jira."
    ]
  }
];

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={sampleData} />
    </div>
  )
}

export default Experiences