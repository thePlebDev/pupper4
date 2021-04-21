import React from 'react';

import Modal from '../Modal';
import Map from '../Map'


const Home =({show,setShow})=>{
    return(
        <div>
            <Modal show={show} setShow={setShow}/>
            <Map/>
        </div>
    )
}


export default Home