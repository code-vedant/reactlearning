import { useState } from 'react'

import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex justify-center gap-10 items-center bg-orange-200'>
    <Card username='Dictator' imgSrc='https://images.unsplash.com/flagged/photo-1578940991997-303f19ea31ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTMyfHx8ZW58MHx8fHx8' />
    <Card username='Darksoul' imgSrc='https://images.unsplash.com/photo-1576812374620-77791cf84d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODd8fHxlbnwwfHx8fHw%3D' />
    </div> 
    
    </>
  )
}

export default App
