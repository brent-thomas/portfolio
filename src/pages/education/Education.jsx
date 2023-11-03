import React from 'react'
import GridDisplay from '../../components/gridDisplay/GridDisplay'

const Education = () => {
const items = [
    { title: "Title 1" },
    { title: "Title 2" },
    { title: "Title 3" },
    { title: "Title 4" },
    { title: "Title 5" }
];
    
  return (
    <div>
        <GridDisplay items={items} />
    </div>
  )
}

export default Education