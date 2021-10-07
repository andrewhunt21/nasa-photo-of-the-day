import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Header() {
    return (
        <StyleHeader>
            <h1>Astronomy Picture of the Day</h1>
        </StyleHeader>
    )
}