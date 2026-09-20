import React from 'react'

const Counter = ({name, setname }  ) => {
 
  return (
    <div>
     <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
     <p>{name}</p>
    </div>
  )
}

export default Counter
