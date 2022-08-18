import axios from "axios";

export const deleteDog = async id => {
    try{
        await axios.delete('http://localhost:3001/dogs/' + id + '/delete')
    
        alert("Dog deleted");
    }
    catch (err){
        console.log(err)
    }
}