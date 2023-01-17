import React from 'react'
import {useState, useEffect} from 'react'
import { ApiGet } from '../utils/apiFetcher'


const Match = () => {

    const [matches ,setMatches] = useState({})
    const [matchesOnSpecificLocation, setMatchesOnLocation] = useState([{}])
    const [selectedMatch, setSelectedMatch] = useState(0)
    const [location, setLocation] = useState()

    const getMatches = () => {
        ApiGet("match", setMatches)
    }

    const handleChange = (e) => {
        setSelectedMatch(e.target.value)
      }
      const getMatchesInSpecificLocation =()=> {
        const id = selectedMatch.id
        ApiGet("match/location/" + selectedMatch, setMatchesOnLocation)
      }


  return (
    <div>
    <br/>

        <label>
          Vælg en by for at se alle de kampe som skal spilles der
       <select value={selectedMatch} onChange={handleChange}>
        <option value="1">Brønshøj</option>
        <option value="2">KBH Ø</option>
        <option value="3">Brønderslev</option>
       </select>
       </label>
      
        <button onClick={getMatchesInSpecificLocation}>Vælg</button>
        {matchesOnSpecificLocation.length && 
        <div>
          <table>
            <thead>
              <tr>
                <th>Modstander:</th>
                <th>Dommer:</th>
                <th>type</th>
                {/* <th>Indendørs eller udensdørs?</th> */}
              </tr>
            </thead>
            {matchesOnSpecificLocation.map((match => (
                <tbody key={match.id}>
                  <tr>
                    <td>{match.opponentTeam}</td>
                    <td>{match.judge}</td>
                    <td>{match.type}</td>
                   {/*  <td>{match.indoor}</td> */}
                  </tr>
                </tbody>
            )))}
            </table></div>}
     
     

        <button onClick={getMatches}>Klik her for at se alle kampe</button>
        {matches.length && 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Modstander</th>
                        <th>Dommer</th>
                        <th>Type</th>
                        <th>Indendørs eller udendørs?</th>
                    </tr>
                </thead>
                {matches.map((match => (
                <tbody key={match.id}>
                  <tr>
                    <td>{match.opponentTeam}</td>
                    <td>{match.judge}</td>
                    <td>{match.type}</td>
                    <td>{match.indoor}</td>
                  </tr>
                </tbody>
            )))}
            </table>
            </div>}
    </div>
  )
}

export default Match