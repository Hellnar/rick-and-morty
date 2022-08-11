import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character'
import { BodyStyled } from '../styled/Body.styled'

export default function Body({page, setPage}) {
    const [characters, setCharacters] = useState(null)
    
    useEffect(() => {
        console.log(page)
        async function getCharacters() {
            const chars = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const parsed = await chars.json()
            setCharacters(parsed)

            console.log(parsed)
        }

        getCharacters()
    }, [page])
    
    return (
        <BodyStyled>
            <div className="characters-list">
                {characters && characters.results.map(char => {
                    return (
                        <Character key={char.id} charData={char}/>    
                    )
                })}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)}>Prev</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </BodyStyled>
    )
}
