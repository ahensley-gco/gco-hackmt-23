import React, { useRef } from 'react';
import '../css/form.css';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
function CreatePost() {
    const form=useRef();
    const navigate = useNavigate();

    const onSubmit = () =>{
        alert("Post Created Successfully!");
        navigate(-1);
    }
    return (
        <div className="backdroptest">
            <a class = "back" href="javascript: history.go(-1)">Go Back</a>
            <h3>Post</h3>
            
                <form ref={form}>
                <div className="container">
                    <label>
                        <div className="formInput">Sponsoree Name:</div>
                        <input type="text" name="spee_name" />
                    </label>
                    <label>
                        <div className="formInput">Path for picture:</div>
                        <input type="file" name="path" />
                    </label>
                    
                    <label>
                    <div className="formInput" > Update Story</div>
                        
                        <textarea name="spee_bio" placeholder="Add story here"></textarea>
                       
                    </label>
                    <input type="button" onClick = {onSubmit} value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}

export default CreatePost;