import React from 'react'
import { useState } from 'react'
import { ApiDelete, ApiPost } from '../utils/apiFetcher'
import { initialPlayer } from '../utils/initialState'
import { useNavigate } from 'react-router-dom'

const EditPlayer = ({onChange}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('kampklar')
    const [player, setPlayer] = useState(initialPlayer);
    const navigate = useNavigate()
    const [changeOccured, setChangeOccured] = useState(false)
    const [showForm, setShowForm] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
       /*  var newPlayer = {
            "name": name,
            "phone": phone,
            "email": email,
            "status": status
        } */
        let newPlayer = player
        newPlayer.name = name;
        newPlayer.phone = phone;
        newPlayer.email = email;
        newPlayer.status = status;
        setPlayer(newPlayer)

        /* fetch('http://localhost:8080/devops_starter_war_exploded/api/player/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: newPlayer
         }) */
        ApiPost('player/', setPlayer, player)
        navigate('/')
    }
    const onClick = () => {
        setShowForm(!showForm)
      }

   

  return (
    <div className='create'>
        <div>
    {!showForm && 
    <button className='show-edit-form' onClick={onClick}>Opret ny spiller</button>}
    </div>
    {showForm && 
  <div>
        <form onSubmit={handleSubmit}>
            <label>Navn: </label>
            <input type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <label>Telefon:</label>
            <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
            <label>Email:</label>
            <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="kampklar">Kampklar</option>
                <option value="skadet">Skadet</option>
            </select>
            <button>Tilføj spiller</button>
        </form>

</div>
    }

    </div>
  )
}

export default EditPlayer