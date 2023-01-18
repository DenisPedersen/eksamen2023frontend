import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ApiDelete, ApiGet } from '../utils/apiFetcher'

const DeletePlayer = () => {
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState([])
    const [changeOccured, setChangeOccured] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const onClick = () => {
        setShowForm(!showForm)
      }

    useEffect(() => {
        fetch('http://localhost:8080/devops_starter_war_exploded/api/player').then((data) => data.json()).then((value) => setPlayers(value))
    })

    const deletePlayer= async(id) => {
        await fetch (`http://localhost:8080/devops_starter_war_exploded/api/player/${id}`,  {
            method: 'DELETE'
        })
    }


  return (
    <div className='details'>
        <div>
        {!showForm && 
        <button className='show-matches-for-player' onClick={onClick}>Se liste over alle spillere</button> }
        </div>

        {showForm &&
        <table>
      
        {players.map((player) => {
            return (
                <tbody key={player.id}>
                    <th>Navn: </th>
                    <td>{player.name}</td>
                    <th>Telefon: </th>
                    <td>{player.phone}</td>
                    <th>Email: </th>
                    <td>{player.email}</td>
                    <th>Telefon: </th>
                    <td>{player.status}</td>
                    <button 
                    onClick={(e) => {
                        e.preventDefault()
                        deletePlayer(player.id)
                    }}
                    >Slet spiller</button>


                </tbody>
            )
        })}
        </table>
}

    </div>
  )
}

export default DeletePlayer