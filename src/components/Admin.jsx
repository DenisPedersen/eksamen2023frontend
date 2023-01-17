import React from 'react'
import { useState } from 'react'
import CreatePlayer from './CreatePlayer'

const Admin = ({match, setMatch}) => {
    


  return (
    <div><h2>Velkommen</h2>
        <h2>Her kan du redigere i kampe, lokation og spillere</h2>
      
        <CreatePlayer/>
      
    </div>
  )
}

export default Admin