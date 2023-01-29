import React, { useRef } from 'react';
import '../css/form.css';
import emailjs from '@emailjs/browser';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
function confirmSubmit(){
    var response = window.confirm("Are you sure you want to delete this donor?");
    if (response){
        alert("Sponsoree deleted successfully!.");
    }
}
function DeleteSp(props) {
    const form=useRef();
    const navigate = useNavigate();
    const onSubmit = () => {
        confirmSubmit();
        navigate(-1);
    }

    return (
        <div className="backdroptest">
            <a class = "back" href="javascript: history.go(-1)">Go Back</a>
            <h3>Delete Sponsoree</h3>
            
                <form ref={form}>
                <div className="container">
                    <label>
                        <div className="formInput">Name Sponsoree:</div>
                        <input type="text" name="spee_name" />
                    </label>
                    <input type="button" value="Submit" onClick = {onSubmit} className='submit' />

                </div>
                </form>
            

        </div>
    )
}

export default DeleteSp;