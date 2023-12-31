import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'
const masterticket_url = "https://youtu.be/YyvD4ztZ3tA"

const items = [
  {
    type:'project',
    title: 'AntiTherapy - Chatbot',
    description: `AntiTherapy is a server-side chatbot developed with Flask and PyTorch, offering darkly humorous responses. It pairs with a React front-end for an engaging user experience, demonstrating proficiency in Python, NLP, and web development.`,
    links:[
      {
        Github: 'https://github.com/brent-thomas/Anti-Therapy-Bot'
      },
    ]
  },
  {
    type:'project',
    title: 'Pet Shelter Analysis',
    description: `A data-driven exploration of the Austin Animal Shelter, this project leverages Python and Pandas to analyze trends in animal intake and adoption. Key insights include area-specific intake patterns, breed and age group adoption rates, and seasonal fluctuations, providing valuable information for optimizing shelter operations and animal care strategies.`,
    links: [
      {
        Github: 'https://github.com/brent-thomas/Pet-Shelter-Analysis'
      }
    ]

  },
  {
    type:'project',
    title:'Grocery Store Inventory',
    description:'The Grocery Inventory Management System, developed in Python with SQLAlchemy, is a comprehensive tool for managing grocery inventories. It features functionalities like product detail viewing, inventory analysis, and data backup, ideal for streamlining inventory processes in small to medium grocery stores.',
    links: [
      {
        Github: 'https://github.com/brent-thomas/Grocery-Store-Inventory'
      }
    ]
  },
  {
    type:'project',
    title: 'Basketball Stats Tool',
    description: 'A Python-based command-line application for managing basketball team statistics, featuring data import, player balancing, and detailed statistical displays. This tool streamlines team organization by balancing player experience, displaying comprehensive team stats, and offering a user-friendly menu interface.',
    links:[
      {
        Github: 'https://github.com/brent-thomas/Basketball-Stats-Tool'
      },
      {
        Youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',
      }
      
      
    ]
  },
    {
      type:'project',
      title: 'A Number Guessing Game',
      description: "Brent's Number Guessing Game is a Python-based interactive game where players guess a secret number between 1 and 100, receiving hints and tracking attempts to beat high scores and analyze their guessing statistics.",
      links:[
        {
          Github: 'https://github.com/brent-thomas/Brents-Number-Guessing-Game',
        },
        {
          Youtube: 'https://youtu.be/_lj1TjDaKTo'
        }
      ]
    },
    {
        type:'project',
        title: 'MasterTicket',
        description: 'See The PyCharmers live: secure your front-row seats with MasterTicket, a Python-based command-line program for a realistic ticket-purchasing experience.',
        links:[
          {
            Github: 'https://github.com/brent-thomas/MasterTicket'
          },
          {
            Youtube: 'https://www.youtube.com/watch?v=YyvD4ztZ3tA',       
          }
      ]
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