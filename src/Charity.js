import './Charity.css';
import { useState } from 'react';

import Backdrop from './components/UpdateSp.js';
import Backdroptest from './components/Backdroptest.js';
import CreateSp from './CreateSp.js';
import UpdateSp from './components/UpdateSp.js';

function Charity() {
  const [createSpOn, setCreateSpOn] = useState(false);
  const [updateSpOn, setUpdateSpOn] = useState(false);
  function createSpForm(){
    setCreateSpOn(true);
  }
  function updateSpForm(){
    setUpdateSpOn(true);
  }
    return (
      <div>
        <h1>Hello Charity</h1>
        <wrapper className="charity">
          <row className="row">
            <div className='btn btnCh' onClick={createSpForm}>Create Sponsoree</div>
            <div className='btn btnCh' onClick={updateSpForm}>Update Sponsoree</div>
            <div className='btn btnCh'>Delete Sponsoree</div>
          </row> 
          <row className="row"> 
            <div className='btn btnDonor'>Create Donor</div>
            <div className='btn btnDonor'>Update Donor</div>
            <div className='btn btnDonor'>Delete Donor</div>
          </row>
          <row className="row">
            <div className='btn btnDonor'>Create Post</div>
            <div className='btn btnDonor'>Update Post</div>
            <div className='btn btnDonor'>Delete Post</div>
          </row>
        </wrapper>
       {/* {createSpOn && <Backdrop/>}*/}
        {createSpOn && <Backdroptest/>}
        {updateSpOn && <UpdateSp/>}
       {/* {createSpOn && <CreateSp/>}*/}
  
      </div>
    );
}
  
  export default Charity;
  