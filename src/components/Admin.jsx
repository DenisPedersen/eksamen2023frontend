import React from 'react'
import { useState } from 'react'
import EditPlayer from './EditPlayer'
import EditLocation from './EditLocation'
import EditMatch from './EditMatch'
import DeleteLocation from './DeleteLocation'
import DeletePlayer from './DeletePlayer'

const Admin = ({match, setMatch}) => {
    


  return (
    <div><h2>Velkommen</h2>
        <h2>Her kan du redigere i kampe, lokation og spillere</h2>
        <EditLocation/>
        <EditPlayer/>
        <EditMatch />
        <DeleteLocation />
        <DeletePlayer />
      
    </div>
  )
}

export default Admin