/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"
import { postDog, getAllTemperaments } from "../../redux/actions";

const DogCreate = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)
    const [input, setInput] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        temperaments    : []
    })
    const history = useHistory("/home")

    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postDog(input))
        alert("Dog create")
        setInput({
            name: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            life_span: "",
            temperaments: []
        })
        history.push('/home ')
    }

    const handleSelectTemp = (e) => {
      setInput({
          ...input,
          temperaments:[...input.temperaments, e.target.value]
        })  
    }




    return (
        <div>
            <Link to="/home"><button>HOME</button></Link>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={(e)=>handleChange(e)} placeholder="name..." />
                </div>

                <div>
                    <label>Lower height: </label>
                    <input type="text" name="height_min" value={input.height_min} onChange={(e)=>handleChange(e)} placeholder="lower height..." />
                </div>

                <div>
                    <label>Higher height: </label>
                    <input type="text" name="height_max" value={input.height_max} onChange={(e)=>handleChange(e)} placeholder="higher height" />
                </div>

                <div>
                    <label>Lower weight: </label>
                    <input type="text" name="weight_min" value={input.weight_min} onChange={(e)=>handleChange(e)} placeholder="lower height..." />
                </div>

                <div>
                    <label>Higher weight: </label>
                    <input type="text" name="weight_max" value={input.weight_max} onChange={(e)=>handleChange(e)} placeholder="higher weight" />
                </div>


                <div>
                    <label>Life span: </label>
                    <input type="text" name="life_span" value={input.life_span} onChange={(e)=>handleChange(e)} placeholder="life span" />
                </div>

                <div>
                    <label>Temperaments: </label>
                    <select onChange={(e)=>handleSelectTemp(e)}>
                        {temperaments.map(temp => (
                            <option value={temp.name}>{temp.name}</option>
                        ))}
                    </select>
                    <ul><li>{input.temperaments.map(temp => temp + ", ")}</li></ul>
                </div>

                <button type="submit">CREATE</button>

            </form> 
        </div>
    )

}

export default DogCreate