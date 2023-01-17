import React from 'react'
import { useState } from 'react'
import { ApiGet } from '../utils/apiFetcher'

const Player = () => {

    const[selectedPlayer, setSelectedPlayer ] = useState(0)
    const[matchesFromPlayer, setMatchesFromPlayer] = useState([{}])

    const getMatchesFromPlayer = () => {
        ApiGet("match/player/" + selectedPlayer, setMatchesFromPlayer)
    }
    const handleChange = (e) => {
        setSelectedPlayer(e.target.value)
      }

  return (
    <div className='details'>
        <label>
          Vælg en spiller for at se alle de kampe vedkommende skal deltage i
       <select value={selectedPlayer} onChange={handleChange}>
        <option value="1">John</option>
        <option value="2">Bjarne</option>
       </select>
       </label>

       <button onClick={getMatchesFromPlayer}>Se kampe</button>
       {matchesFromPlayer.length && 
       <div>
            <table>
                <thead>
                    <tr>
                        <th>Modstander: </th>
                        <th>Dommer: </th>
                        <th>Type:</th>
                    </tr>
                </thead>
            {matchesFromPlayer.map((match => (
                <tbody key={match.id}>
                    <tr>
                        <td>{match.opponentTeam}</td>
                        <td>{match.judge}</td>
                        <td>{match.type}</td>
                    </tr>
                </tbody>
            )))}


            </table>
        
        </div>}


    </div>
  )
}

export default Player