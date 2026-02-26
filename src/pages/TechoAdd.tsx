const TechnoAdd = () => {
   

    return ( 
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form action="">
                    <label htmlFor="techno-name">Name:</label><br />
                    <input type="text" name="techo-name" id="tehcno-name" /> <br />
                    <label htmlFor="techno-category">Categories</label> <br />
                    <select name="techno-category" id="techno-category">
                        <option value="" disabled selected>Select a category</option>
                        <option value="">Front</option>
                        <option value="">Back</option>
                        <option value="">Full stack</option>
                        <option value="">Other</option>
                    </select> <br />
                    <label htmlFor="techno-description">Description</label> <br />
                    <textarea name="techno-description" id="techno-description" cols={30} rows={10} ></textarea> <br />
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
     );
}
 
export default TechnoAdd;