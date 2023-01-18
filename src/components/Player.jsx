import React from 'react'
import { useState } from 'react'
import { ApiGet } from '../utils/apiFetcher'

const Player = () => {

    const[selectedPlayer, setSelectedPlayer ] = useState(0)
    const[matchesFromPlayer, setMatchesFromPlayer] = useState([{}])
    const [player, setPlayer] = useState([])
    const [showForm, setShowForm] = useState(false)


    const getMatchesFromPlayer = () => {
        ApiGet("match/player/" + selectedPlayer, setMatchesFromPlayer)
    }
    const handleChange = (e) => {
        setSelectedPlayer(e.target.value)
      }
      const onClick = () => {
        setShowForm(!showForm)
      }

  return (
    <div className='details'>
        <div>
        {!showForm && 
        <button className='show-matches-for-player' onClick={onClick}>Vis kampe for en enkelt spiller</button> }
        </div>
        {showForm && 
        <div>
        <label>
          Vælg en spiller for at se alle de kampe vedkommende skal deltage i

         {/*  <select value={setPlayer} onChange={handleChange}>
            <option>Vælg</option>
            {player.map((option, index)=>{
                return<option key={index}>{option.players[0].name}</option>
            })}
          </select>
          <button onClick={getMatchesFromPlayer}>Se her</button>
          {player.map((data, i) => {
        return <p key={i.id}>{player.matches[0].name}</p>;
          })} */}


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
        
        }
    </div>
  )
}

export default Player