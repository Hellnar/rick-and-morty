import React from 'react'
import { CharacterStyled } from '../styled/Character.styled'

export default function Character({charData}) {

    return (
        <CharacterStyled className="character">
            <div className="char-header">
                <div className="char-id">#{charData.id}</div>
                <img src={charData.image} alt={charData.name} />
            </div>
            <div className="char-name">
                <div className="name">{charData.name}</div>
                <div className="status">{charData.status}</div>
            </div>
            <div className="char-info">
                <div className="row">
                    <div className="title">Species</div>
                    <div className="value">{charData.species}</div>
                </div>
                <div className="row">
                    <div className="title">Gender</div>
                    <div className="value">{charData.gender}</div>
                </div>
                <div className="row">
                    <div className="title">Origin</div>
                    <div className="value">{charData.origin.name}</div>
                </div>
                <div className="row">
                    <div className="title">Location</div>
                    <div className="value">{charData.location.name}</div>
                </div>
            </div>
        </CharacterStyled>
    )
}


/*
id
name
species
gender
from
image
episodes
*/