/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"
import { postDog, getAllTemperaments } from "../../redux/actions";



const DogCreate = () => {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const temperaments = useSelector((state) => state.allTemperaments)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        temperaments: []
    })
    const history = useHistory("/home")

    const validate = (input) => {
        const dogName = allDogs.filter(e => e.name.toLowerCase() === input.name.toLowerCase())
        let errors = {}
        if (!input.name) {
            errors.name = "Name is required"
        }
        else if (!/^[A-Za-z]+$/.test(input.name)) {
            errors.name = "The name must contain only letters"
        }
        else if (dogName.lenght > 0) {     //VEEEER
            errors.name = "Existing name"
        }
        else if (input.name.length < 3) {
            errors.name = "The name must contain at least 3 characters"
        }
        if (!input.height_min) {
            errors.height_min = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.height_min))) {
            errors.height_min = "This parameter only accepts integers"
        }
        else if (input.height_min >= input.height_max) {
            errors.height_min = "The lowest height must not exceed the highest height"
        }
        if (!input.height_max) {
            errors.height_max = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.height_max))) {
            errors.height_max = "This parameter only accepts integers"
        }
        else if (input.height_max <= input.height_min) {
            errors.height_min = "The highest height must exceed the lowest height"
        }
        if (!input.weight_min) {
            errors.weight_min = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.weight_min))) {
            errors.weight_min = "This parameter only accepts integers"
        }
        else if (input.weight_min >= input.weight_max) {
            errors.weight_min = "The lowest weight should not exceed the highest weight"
        }
        if (!input.weight_max) {
            errors.weight_max = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.weight_max))) {
            errors.weight_max = "This parameter only accepts integers"
        }
        else if (input.weight_max <= input.weight_min) {
            errors.weight_max = "The higher weight must overcome the lower weight"
        }
        if (!input.life_span) {
            errors.life_span = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.life_span))) {
            errors.life_span = "This parameter only accepts integers"
        }
        else if (input.life_span > 20) {
            errors.life_span = "This parameter cannot exceed 20 years"
        }
        return errors
    }


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: [e.target.value]

        }))
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
        history.push('/home')
    }

    const handleSelectTemp = (e) => {
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }




    return (
        <div>
            <Link to="/home"><button>HOME</button></Link>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} placeholder="name..." />
                    <p>{errors.name}</p>
                </div>

                <div>
                    <label>Lower height: </label>
                    <input type="text" name="height_min" value={input.height_min} onChange={(e) => handleChange(e)} placeholder="lower height..." />
                    <p>{errors.height_min}</p>
                </div>

                <div>
                    <label>Higher height: </label>
                    <input type="text" name="height_max" value={input.height_max} onChange={(e) => handleChange(e)} placeholder="higher height" />
                    <p>{errors.height_max}</p>
                </div>

                <div>
                    <label>Lower weight: </label>
                    <input type="text" name="weight_min" value={input.weight_min} onChange={(e) => handleChange(e)} placeholder="lower height..." />
                    <p>{errors.weight_min}</p>
                </div>

                <div>
                    <label>Higher weight: </label>
                    <input type="text" name="weight_max" value={input.weight_max} onChange={(e) => handleChange(e)} placeholder="higher weight" />
                    <p>{errors.weight_max}</p>
                </div>


                <div>
                    <label>Life span: </label>
                    <input type="text" name="life_span" value={input.life_span} onChange={(e) => handleChange(e)} placeholder="life span" />
                    <p>{errors.life_span}</p>
                </div>

                <div>
                    <label>Temperaments: </label>
                    <select onChange={(e) => handleSelectTemp(e)}>
                        {temperaments && temperaments.map(temp => (
                            <option key={temp.id} value={temp.name}>{temp.name}</option>
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