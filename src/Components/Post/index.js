import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
   flex-direction:column;
`

const ImageContainer =styled.div`
    width:60%;
    margin:0 auto;
    height:40%;
    border:1px solid #845ec2;
    margin-top:40px;
    border-radius:4px;
    margin-bottom:20px;
    
`

const Button = styled.button`
    padding:8px 20px;
    outline:none;
    border:1px solid #845ec2;
    border-radius:4px;
    background-color:white;
    color:#845ec2;
    width:130px;
    margin:10px auto;
`







const Post =()=>{
    return(
        <Container>
            <ImageContainer>

            </ImageContainer>
            <Button>Add Image</Button>
            <Button>Add Location</Button>
        </Container>
    )
}


export default Post