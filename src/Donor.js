import './Charity.css';
import { useState } from 'react';

import Backdrop from './components/UpdateSp.js';
import Backdroptest from './components/Backdroptest.js';
import CreateSp from './CreateSp.js';
import UpdateSp from './components/UpdateSp.js';

function Donor() {
  let sponsoree = ['Luke', 'Jane', 'Kate'];
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
        <h1>Hello Donor</h1>
        <div className="donor">
          <ul>See how your Sponsoree are doing
            <li>Kate</li>
            <li>Olga</li>
            <li>Luke</li>

          </ul>

        </div>
       {/* {createSpOn && <Backdrop/>}*/}
        {createSpOn && <Backdroptest/>}
        {updateSpOn && <UpdateSp/>}
       {/* {createSpOn && <CreateSp/>}*/}
  
      </div>
    );
}
  
  export default Donor;
  