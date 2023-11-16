import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'

const Education = () => {
const items = [
    { 
      type:'education',
      source: 'Western Governors University - Graduated 2024',
      title: "Bachelor of Science in Computer Science (B.S.)",
      description: "Bachelor of Science in Computer Science with a focus on software development, system optimization, and data structures. Graduated from a rigorous, ABET-accredited program designed to foster skills in AI, version control, and computational theory for immediate industry impact.",
      img: 'https://dbl9c3jtrxi8u.cloudfront.net/wgu_logo2.png',
     },
     { 
      type:'education',
      title: "Associate of Science in Computer Science (B.S.)",
      source: 'Georgia State University - Graduated 2022',
      description: "This two-year program offers foundational knowledge in algorithms, data structures, programming languages, and software development. With a balance of theory and hands-on projects, graduates are equipped to pursue a range of tech roles or advanced studies in the field.",
      img: 'https://dbl9c3jtrxi8u.cloudfront.net/georgia_state_logo.png',
     },
     {
      type:'education',
      source: "Amazon Web Services(AWS) - 2022",
      title: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/61039e48-7c36-40dc-81f2-77028c4d2e38?source=linked_in_profile",
      img: "https://dbl9c3jtrxi8u.cloudfront.net/cloud_practitoner.png",
      description: "This certification from AWS validates foundational cloud knowledge, including AWS core services, security, architecture, pricing, and support.",
    },
    {
      type:'education',
      source: 'Teamtreehouse.com - 2020' ,
      title: "TechDegree - Full Stack Javascript",
      link: "https://www.credential.net/12caeaf1-f086-484d-917b-e1fff3c93690",
      img: "https://dbl9c3jtrxi8u.cloudfront.net/treehouse_logo2.png",
      description: "The Full Stack JavaScript Techdegree provides a comprehensive education in the basics of the JavaScript language and its use in front end user experience and back end application development using Node and Express.",
   },
   {
    type:'education',
    source: "Coursera - University of Michigan",
    title: "Python for Everybody Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/3XNBA9FRCGNL",
    img: "https://dbl9c3jtrxi8u.cloudfront.net/python_for_everybody2.png",
    description: "Completed on Dec 13, 2018. A Coursera specialization by the University of Michigan, covering the fundamentals of Python. Topics included data structures, web data access, databases with Python, and data visualization.",
  }
];
    
  return (
    <div>
        <GridDisplay items={items} />
    </div>
  )
}

export default Education