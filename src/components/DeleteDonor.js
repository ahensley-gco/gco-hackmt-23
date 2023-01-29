import React, { useRef } from 'react';
import '../css/form.css';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
function confirmSubmit(){
    var response = window.confirm("Are you sure you want to delete this donor?");
    if (response){
        alert("Donor Deleted.");
    }
}
function DeleteDonor() {
    const navigate = useNavigate();
    const form=useRef();

    const onSubmit = () => {
        confirmSubmit();
        navigate(-1);
    }

    return (
        <div className="backdroptest">
            <a class = "back" href="javascript: history.go(-1)">Go Back</a>
            <h3>Delete Donor</h3>
            
                <form ref={form}>
                <div className="container">
                    <label>
                        <div className="formInput">Donor Name:</div>
                        <input type="text" name="donor_name" />
                    </label>
                    <input type="button" value="Submit" onClick={onSubmit} className='submit' />

                </div>
                </form>
        </div>
    )
}

export default DeleteDonor;