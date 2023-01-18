import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ApiDelete, ApiGet } from '../utils/apiFetcher'

const DeleteLocation = () => {
    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState([])
    const [changeOccured, setChangeOccured] = useState(false)
    const [showForm, setShowForm] = useState(false)


    const onClick = () => {
        setShowForm(!showForm)
      }
    useEffect(() => {
        fetch('http://localhost:8080/sportsmatch_war_exploded/api/location').then((data) => data.json()).then((value) => setLocations(value))
    })

    const deleteLocation = async(id) => {
        await fetch (`http://localhost:8080/sportsmatch_war_exploded/api/location/${id}`,  {
            method: 'DELETE'
        })
    }


  return (
    <div>
         <div className='create'>
        {!showForm && 
        <button className='delete-locations' onClick={onClick}>Se liste over alle lokationer</button> }
        </div>

        {showForm &&
        <table>
            
        {locations.map((location) => {
            return (
                <tbody key={location.id}>
                    <th>Adresse: </th>
                    <td>{location.address}</td>
                    <th>By: </th>
                    <td>{location.city}</td>
                    <button 
                    onClick={(e) => {
                        e.preventDefault()
                        deleteLocation(location.id)
                    }}
                    >Slet lokation</button>


                </tbody>
            )
        })}
        </table>

    }
    </div>
  )
}

export default DeleteLocation