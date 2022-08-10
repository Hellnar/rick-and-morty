import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character'
import { BodyStyled } from '../styled/Body.styled'

export default function Body() {
    const [characters, setCharacters] = useState(null)
    
    useEffect(() => {

        async function getCharacters() {
            const chars = await fetch("https://rickandmortyapi.com/api/character")
            const parsed = await chars.json()
            setCharacters(parsed)

            console.log(parsed)
        }

        getCharacters()
    }, [])
    
    return (
        <BodyStyled>
            {characters && characters.results.map(char => {
                return (
                    <Character key={char.id} charData={char}/>    
                )
            })}
        </BodyStyled>
    )
}
