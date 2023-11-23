import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'
import { Link } from 'react-router-dom'
const items = [
  {
    type:'project',
    title: 'AntiTherapy',
    description: 'A Python-based command-line application for managing basketball team statistics, featuring data import, player balancing, and detailed statistical displays. This tool streamlines team organization by balancing player experience, displaying comprehensive team stats, and offering a user-friendly menu interface.',
    github: 'https://github.com/brent-thomas/Basketball-Stats-Tool',
    live_link: '/javascript/projects/antitherapy'
  },
 
]

const Javascript = () => {
  return (
    <div>
      
      <Link target="_blank" to={items[0].live_link}>Link</Link>
    </div>
  )
}

export default Javascript