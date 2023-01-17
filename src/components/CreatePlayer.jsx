import React from 'react'
import { useState } from 'react'
import { ApiPost } from '../utils/apiFetcher'
import { initialPlayer } from '../utils/initialState'

const CreatePlayer = ({onChange}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('kampklar')
    const [player, setPlayer] = useState(initialPlayer);

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
    }

  return (
    <div className='createPlayer'>
        <h2>Her kan du oprette en ny spiller.</h2>
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
  )
}

export default CreatePlayer