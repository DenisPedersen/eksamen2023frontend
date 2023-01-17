import React from 'react'
import { useState } from 'react'
import { ApiPost } from '../utils/apiFetcher'
import { useNavigate } from 'react-router-dom'
import { initialMatch } from '../utils/initialState'


const EditMatch = () => {
    const [opponentTeam, setOpponentTeam] = useState('')
    const [judge, setJudge] = useState('')
    const [type, setType] = useState('')
    const [inDoor, setIndoor] = useState(1)
    const [match, setMatch] = useState(initialMatch)
    const navigate = useNavigate()
    const [changeOccured, setChangeOccured] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
       
        let newMatch = match
        newMatch.opponentTeam = opponentTeam;
        newMatch.judge = judge;
        newMatch.type = type;
        newMatch.inDoor = inDoor;
        setMatch(newMatch)

    
        ApiPost('match/', setMatch, match)
        navigate('/')
    }
    const onChange = () => {
        setChangeOccured(!changeOccured)
      }
      const onClick = () => {
        setShowForm(!showForm)
      }

  return (
    <div className='create'>
<div>
           {!showForm &&
      <button className='show-edit-form' onClick={onClick}>Opret ny kamp</button> }
        </div>
       {showForm &&
    <div>
            <form onSubmit={handleSubmit}>
                <label>Modstander:</label>
                <input type="text"
                required
                value={opponentTeam}
                onChange={(e) => setOpponentTeam(e.target.value)}/>
                <label>Dommer: </label>
                <input type="text"
                required
                value={judge}
                onChange={(e) => setJudge(e.target.value)}/>
                <label>Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="gruppespil">Gruppespil</option>
                <option value="slutspil">Slutspil</option>
            </select>
            <label>Indendørs?</label>
            <select value={inDoor} onChange={(e) => setIndoor(e.target.value)}>
                <option value="0">Udendørs</option>
                <option value="1">Indendørs</option>
            </select>
                <button>Tilføj kamp</button>

            </form>
    </div>
       }

        
    </div>
  )
}

export default EditMatch