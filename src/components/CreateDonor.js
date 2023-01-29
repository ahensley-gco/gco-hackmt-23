import React, { useRef, useState, useEffect } from 'react';
import '../css/form.css';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
import { API, Storage, Amplify } from "aws-amplify";
import '../css/form.css';
import format from 'pretty-format';
function CreateDonor() {
    const form=useRef();
    const navigate = useNavigate();
    const [donor, setDonor] = useState([]); 
    const onSubmit = () => {
        alert("Donor Created Successfully!")
        navigate(-1);
    }
    return (
        <div className="backdroptest">
            <a class = "back" href="javascript: history.go(-1)">Go Back</a>
            <h3>Post</h3>
            
                <form ref={form}>
                <div className="container">
                    <label>
                        <div className="formInput">Donor Name:</div>
                        <input type="text" name="sponsor_user" id = "sponsor_user" />
                    </label>
                    
                    <label>
                    <div className="formInput" > Sponsoree's List</div>
                        
                        <textarea name="spee_bio" placeholder="one, two, three..."></textarea>
                       
                    </label>
                    <input type="button" onClick = {onSubmit} value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}

export default CreateDonor;