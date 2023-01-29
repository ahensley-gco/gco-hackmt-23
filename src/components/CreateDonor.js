import React, { useRef } from 'react';
import { Button } from '@aws-amplify/ui-react';
function CreateDonor() {
    const form=useRef();


    return (
        <div className="backdroptest">
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
                    <input type="submit" value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}

export default CreateDonor;