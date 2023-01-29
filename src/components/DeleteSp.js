import React, { useRef } from 'react';
import '../css/form.css';
import emailjs from '@emailjs/browser';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
function DeleteSp(props) {
    const form=useRef();
    const navigate = useNavigate();
    const onSubmit = () => {
        alert("Sponsoree deleted successfully!");
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