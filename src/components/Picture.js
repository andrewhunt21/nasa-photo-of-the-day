import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl, apiKey } from '../constants';
import styled from 'styled-components';

const PictureContainer = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Picture(){

    const [pic, setPic] = useState()

    useEffect (() => {
        axios.get(`${baseUrl}?api_key=${apiKey}`)
        .then(resp => {
            console.log(resp.data)
            setPic(resp.data);
        })
    }, [])

    return (
        <PictureContainer>
           { pic &&  <img src= {pic.url} alt ='Nasa Astonomy Picture of the Day'></img>}
           { pic && <h2>{pic.title}</h2> }
           { pic && <p>{pic.date}</p>}
           { pic && <p>{pic.explanation}</p> }
           { pic && <p>copyright: {pic.copyright}</p>}
        </PictureContainer>
    )
}