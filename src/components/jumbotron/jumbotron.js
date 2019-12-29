import React from 'react';
import BlackLogo from '../assets/LUEDER-LOGO-BLACK.svg';
import WhiteLogo from '../assets/LUEDER-LOGO-WHITE.svg';
import styled from "styled-components"
import { levels } from '../../index.styles';
const JumbotronWrapper = styled.section`
        z-index: ${levels.jumbotron};
        position: relative;
`

const JumbotronImage = styled.img`
margin:auto;
left:0;
right:0;


`
const Jumbotron = props => {

    return (
        <JumbotronWrapper>
            <JumbotronImage  src={WhiteLogo} />        
        </JumbotronWrapper>
    )
}

export default Jumbotron;