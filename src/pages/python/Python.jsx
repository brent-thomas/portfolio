import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'
const masterticket_url = "https://youtu.be/YyvD4ztZ3tA"

const items = [
    {
        title: 'MasterTicket',
        description: 'See The PyCharmers live: secure your front-row seats with MasterTicket, a Python-based command-line program for a realistic ticket-purchasing experience.',
        github: 'https://github.com/brent-thomas/MasterTicket',
        youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',
        image: ''
    },
    {
        title: 'MasterTicket',
        description: 'See The PyCharmers live: secure your front-row seats with MasterTicket, a Python-based command-line program for a realistic ticket-purchasing experience.',
        github: 'https://github.com/brent-thomas/MasterTicket',
        youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',
        image: ''
    }
]

const Python = () => {
  return (
    <div>
        <GridDisplay items={items}/>
    </div>
  )
}

export default Python