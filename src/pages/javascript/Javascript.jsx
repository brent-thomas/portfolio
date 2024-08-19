import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'
import { Link } from 'react-router-dom'
const items = [
  {
    type:'project',
    title: 'AntiTherapy',
    description: 'A Python-based command-line application for managing basketball team statistics, featuring data import, player balancing, and detailed statistical displays. This tool streamlines team organization by balancing player experience, displaying comprehensive team stats, and offering a user-friendly menu interface.',
    links: [
      {
        Github: 'https://github.com/brent-thomas/Anti-Therapy-Bot'
      }
    ]
  },
  {
    type:'project',
    title: 'GWSS',
    description: 'Developed a custom web solution for a client, featuring responsive design, dynamic form validation, and integrated email notifications, tailored for efficient bulk wheat straw sales and delivery.',
    links: [
      {
        Github: 'https://github.com/brent-thomas/gwss',
      },
      {
        View: 'https://georgiawheatstrawsales.com'
      }
    ]
  },
  {
    type:'project',
    title: 'Zap URLS',
    description: 'Developed and launched ZapURLs.com, a free, ad-free URL shortening service designed for simplicity and ease of use. Focused on providing a streamlined, hassle-free experience for individuals and small businesses, without the need for registration or dealing with intrusive ads. Perfect for sharing clean, user-friendly links across various platforms.',
    links: [
      {
        Github: 'https://github.com/brent-thomas/gwss',
      },
      {
        View: 'https://georgiawheatstrawsales.com'
      }
    ]
  }
 
]

const Javascript = () => {
  return (
    <div>
        <GridDisplay items={items}/>
    </div>
  )
}

export default Javascript