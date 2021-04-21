import React from 'react';

import Modal from '../Modal'


const Home =({show,setShow})=>{
    return(
        <div>
            <Modal show={show} setShow={setShow}/>
        </div>
    )
}


export default Home