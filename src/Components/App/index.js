import React,{useState} from 'react';
import styled from 'styled-components'

import Navigation from '../Navigation'
import Home from '../Home'



const App =()=>{
    const [show,setShow] = useState(false)

    return(
        <div>
            <Navigation setShow={setShow}/>
            <Home show={show} setShow={setShow}/>
        </div>
    )
}

export default App