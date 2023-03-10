import './Charity.css';
import { useState } from 'react';

import Backdrop from './components/DeleteSp.js';
import Backdroptest from './components/Backdroptest.js';
import CreateSp from './components/UpdateSp';
import UpdateSp from './components/DeleteSp.js';
import { useNavigate } from 'react-router-dom';

function Charity() {
  const navigate = useNavigate();
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
        <div className="charity">
          <div className="row">
            <div className='btn btnDonor' onClick = {() => navigate('/charity/create_post')}>Create Post</div>
            <div className='btn btnDonor' onClick = {() => navigate('/charity/update_sponsor')}>Update Sponsor</div>
            <div className='btn btnCh' onClick = {() => navigate('/charity/create_sponsoree')}>Create Sponsoree</div>
            <div className='btn btnDonor' onClick = {() => navigate('/charity/create_donor')}>Create Donor</div>
          </div> 
          <div className="row"> 
            <div className='btn btnCh' onClick = {() => navigate('/charity/delete_sponsoree')}>Delete Sponsoree</div>
            <div className='btn btnDonor' onClick = {() => navigate('/charity/delete_donor')}>Delete Donor</div>
          </div>
          <div className="row">
          </div>
        </div>
       {/* {createSpOn && <Backdrop/>}*/}
        {createSpOn && <Backdroptest/>}
        {updateSpOn && <UpdateSp/>}
       {/* {createSpOn && <CreateSp/>}*/}
  
      </div>
    );
}
  
  export default Charity;
  