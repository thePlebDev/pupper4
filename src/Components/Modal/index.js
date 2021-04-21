import React,{useRef,useEffect } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

import Post from '../Post'

const Container = styled.div`
    display:${({state})=>state ? 'block': 'none'};
    position:absolute;
    background-color:rgba(0,0,0,0.7);
    height:100vh;
    width:100vw;
    top:0;
    z-index:99999999;
`

const SubContainer = styled.div`
    position:relative;
    color:#845ec2;
    transition:all 0.35s;
    width:90%;
    max-width:600px;
    height:90vh;
    background-color:white;
    margin:40px auto;
    border-radius:4px;
`
const IconContainer = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    cursor:pointer;
`



const Modal =({show,setShow})=>{
    const node = useRef()

    const handleClick=(e)=>{
        if(!node.current.contains(e.target)){
            setShow(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick);
        }
    },[])

    return(
        <Container state={show}>
            <SubContainer state={show} ref={node}>
                <IconContainer>
                    <CloseIcon style={{fontSize:'40px'}} onClick={()=>{setShow(false)}}/>
                </IconContainer>
                <Post/>
            </SubContainer>
        </Container>
    )
}

export default Modal