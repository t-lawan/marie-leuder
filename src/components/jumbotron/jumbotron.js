import React from 'react';
import WhiteLogo from '../assets/LUEDER-LOGO-WHITE.svg';
import styled from "styled-components"
import { levels } from '../../index.styles';
const JumbotronWrapper = styled.section`
        z-index: ${levels.jumbotron};
        position: fixed;
        width: auto;
        height: auto;
        min-height: 80%;
        min-width: 80%;
        top: 25%;
        left: 10%;
        margin:auto;

`

const JumbotronImage = styled.img`
/* max-width: 80%; */

`
const Jumbotron = props => {

    return (
        <JumbotronWrapper>
            <JumbotronImage  src={WhiteLogo} />        
        </JumbotronWrapper>
    )
}

export default Jumbotron;