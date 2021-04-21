import React from 'react';
import styled from 'styled-components'

import CameraAltIcon from '@material-ui/icons/CameraAlt';

const Container = styled.nav`
    height:72px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const Title = styled.div`
    font-size:25px;
    color:#845ec2;
    font-weight:bold;
`
const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`

const Navigation =({setShow})=>{

    return(
        <Container>
            <Title>Pup-Spotter</Title>
            <IconContainer onClick={()=>{setShow(true)}}>
                <CameraAltIcon style={{fontSize:'35px',color:'#845ec2'}}/>
            </IconContainer>
        </Container>
    )
}

export default Navigation