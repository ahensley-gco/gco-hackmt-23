import { API, Storage } from "aws-amplify";
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
    createSpee as createSpeeMutation,
    deleteSpee as deleteSpeeMutation,
    createUserSpeeXref as createUserSpeeXrefMutation,
  } from "../graphql/mutations";
function Backdroptest(props) {
    async function createSpee(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            ID: '1',
          name: form.get("spee_name"),
          bio: form.get("spee_bio"),
          age: form.get("spee_age"),
          //update_user: user.username,
        };
        await API.graphql({
          query: createSpeeMutation,
          variables: { input: data },
        });
       // fetchSpees();
        event.target.reset();
      }
    return (
        <div className="backdroptest" >
            <h3>Create Sponsoree</h3>
            
                <form as="form"  onSubmit={createSpee}>
                <div className="container">
                    <label>
                        <div className="formInput">Name:</div>
                        <input type="text" name="spee_name" />
                    </label>
                    <label>
                        <div className="formInput">Age:</div>
                        <input type="text" name="spee_age" />
                    </label>
                    
                    <label>
                    <div className="formInput"> Story</div>
                        
                        <textarea placeholder="Add story here" name="spee_bio"></textarea>
                       
                    </label>
                    <input type="submit" value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}
export default Backdroptest;