import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'
const masterticket_url = "https://youtu.be/YyvD4ztZ3tA"

const items = [
  {
    type:'project',
    title: 'Basketball Stats Tool',
    description: 'A Python-based command-line application for managing basketball team statistics, featuring data import, player balancing, and detailed statistical displays. This tool streamlines team organization by balancing player experience, displaying comprehensive team stats, and offering a user-friendly menu interface.',
    github: 'https://github.com/brent-thomas/Basketball-Stats-Tool',
    youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',
    image: ''
  },
    {
      type:'project',
      title: 'A Number Guessing Game',
      description: "Brent's Number Guessing Game is a Python-based interactive game where players guess a secret number between 1 and 100, receiving hints and tracking attempts to beat high scores and analyze their guessing statistics.",
      github: 'https://github.com/brent-thomas/Brents-Number-Guessing-Game',
      youtube: 'https://youtu.be/_lj1TjDaKTo',
      image: ''
    },
    {
        type:'project',
        title: 'MasterTicket',
        description: 'See The PyCharmers live: secure your front-row seats with MasterTicket, a Python-based command-line program for a realistic ticket-purchasing experience.',
        github: 'https://github.com/brent-thomas/MasterTicket',
        youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',
        image: ''
    },
]

const Python = () => {
  return (
    <div>
        <GridDisplay items={items}/>
    </div>
  )
}

export default Python