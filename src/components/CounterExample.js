import React, { useState } from 'react'

export default function CounterExample()
{
     const [count, setCount] = useState(10)
    
  return (
      <div>{count}
          <h1 onClick={() => setCount(count + 1)}>Plus </h1>
          <h1 onClick={()=> setCount(count - 1 )}>minus </h1>
      </div>
  )
}
