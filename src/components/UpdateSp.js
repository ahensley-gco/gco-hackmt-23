import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@aws-amplify/ui-react';
function UpdateSp(props) {
    const form=useRef();
 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_frx3ewu', 'template_l5sm8bz', form.current, 'piP7QCAjhhQf1VP0y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }

    return (
        <div className="backdroptest">
            <h3>Update Sponsoree</h3>
            
                <form ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <label>
                        <div className="formInput">Name Sponsoree:</div>
                        <input type="text" name="spee_name" />
                        <Button height='25px' margin='10px' className='upload'>Find Sponsoree</Button>
                    </label>
                    <label>
                        <div className="formInput">Path for picture:</div>
                        <input type="text" name="path" />
                        <Button height='25px' margin='10px' className='upload'>Upload picture</Button>
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

export default UpdateSp;