import React from 'react'
import { useState } from 'react'
import { initialLocation } from '../utils/initialState'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
import { ApiPut, ApiPost } from '../utils/apiFetcher'


const EditLocation = () => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [location, setLocation] = useState(initialLocation)
    const navigate = useNavigate()
    const [updatedLocation, setUpdatedLocation] = useState(location)
    const [changeOccured, setChangeOccured] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
       
        let newLocation = location
        newLocation.address = address;
        newLocation.city = city;
        setLocation(newLocation)

    
        ApiPost('location/', setLocation, location)
        navigate('/')
    }

    const update = (event) => {
        const value = event.target.value
        const propertyName = event.target.name

        setUpdatedLocation({...location,[propertyName]:value})
    }

    const onChange = () => {
        setChangeOccured(!changeOccured)
      }

    const performEdit = (event) => {
  
        event.preventDefault()
      
        const value = event.target.value
        const propertyName = event.target.name
        
        setUpdatedLocation( {...location,[propertyName]: value})
        const obj = updatedLocation
        setShowForm(!showForm)
        
        ApiPut("location/", onChange, obj )
      
      }
      const onClick = () => {
        setShowForm(!showForm)
      }


  return (
    <div>
       {/*  <div>
           {!showForm &&
      <button className='show-edit-form' onClick={onClick}>Rediger lokation</button> }
        </div>

        {showForm && 
        <div>
          <form onSubmit={performEdit}>
            <input type="text" id="address" name="address" value={updatedLocation.address} placeholder="Ny adresse" onChange={update} />
            <input type="text" id="city" name="city" value={updatedLocation.city} placeholder="Ny by" onChange={update} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      } */}
<div>
           {!showForm &&
      <button className='show-edit-form' onClick={onClick}>Opret ny lokation</button> }
        </div>
       {showForm &&
    <div>
            <form onSubmit={handleSubmit}>
                <label>Adresse:</label>
                <input type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}/>
                <label>By: </label>
                <input type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}/>
                <button>Tilføj lokation</button>

            </form>
    </div>
       }
    </div>
  )
}

export default EditLocation