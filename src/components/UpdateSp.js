function UpdateSp(props) {


    return (
        <div className="backdroptest">
            <h3>Update Sponsoree</h3>
            
                <form>
                <div className="container">
                    <label>
                        <div className="formInput">Name Sponsoree:</div>
                        <input type="text" name="spee_name" />
                    </label>
                    <label>
                        <div className="formInput">Path for picture:</div>
                        <input type="text" name="path" />
                    </label>
                    
                    <label>
                    <div className="formInput"> Update Story</div>
                        
                        <textarea name="spee_bio" placeholder="Add story here"></textarea>
                       
                    </label>
                    <input type="submit" value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}
export default UpdateSp;