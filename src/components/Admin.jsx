import React from 'react'
import { useState } from 'react'
import EditPlayer from './EditPlayer'
import EditLocation from './EditLocation'
import EditMatch from './EditMatch'

const Admin = ({match, setMatch}) => {
    


  return (
    <div><h2>Velkommen</h2>
        <h2>Her kan du redigere i kampe, lokation og spillere</h2>
        <EditLocation/>
        <EditPlayer/>
        <EditMatch />
      
    </div>
  )
}

export default Admin