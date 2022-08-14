/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"
import { postDog, getAllTemperaments } from "../../redux/actions";
import Footer from "../Footer";
import { Button, DivFormContainer, FormStyle, InputForm, Select, ImageSubtitle, DivH1, DivName, DivLowerHeight, DivHigherHeight, DivLowerWeight, DivHigherWeight, DivsInput, DivTemperament, ButtonForm, ContainerForm, Form, DivTitle, DivTitleForm, TitleForm, DivInput, PForm, SelectForm, DivTemp, ContainerTemps, ButtonTemp } from "../StyledPage";




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
        // let dogName = allDogs.filter(e => (e.name).toLowerCase() === (input.name).toLowerCase())
        // console.log(dogName)
        let errors = {}
        if (!input.name) {
            errors.name = "Name is required"
        }
        else if (!/^[A-Za-z]+$/.test(input.name)) {
            errors.name = "The name must contain only letters"
        }
        // else if (dogName.lenght > 0) {     //VEEEER
        //     errors.name = "Existing name"
        // }
        else if (input.name.length < 3) {
            errors.name = "The name must contain at least 3 characters"
        }
        if (!input.height_min) {
            errors.height_min = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.height_min))) {
            errors.height_min = "This parameter only accepts integers"
        }
        else if (parseInt(input.height_min) >= parseInt(input.height_max)) {
            errors.height_min = "The lowest height must not exceed the highest height"
        }
        if (!input.height_max) {
            errors.height_max = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.height_max))) {
            errors.height_max = "This parameter only accepts integers"
        }
        else if (parseInt(input.height_max) <= parseInt(input.height_min)) {
            errors.height_min = "The highest height must exceed the lowest height"
        }
        if (!input.weight_min) {
            errors.weight_min = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.weight_min))) {
            errors.weight_min = "This parameter only accepts integers"
        }
        else if (parseInt(input.weight_min) >= parseInt(input.weight_max)) {
            errors.weight_min = "The lowest weight should not exceed the highest weight"
        }
        if (!input.weight_max) {
            errors.weight_max = "This parameter is required"
        }
        else if (!Number.isInteger(parseInt(input.weight_max))) {
            errors.weight_max = "This parameter only accepts integers"
        }
        else if (parseInt(input.weight_max) <= parseInt(input.weight_min)) {
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
        if (!input.name || !input.height_min || !input.height_max || !input.weight_min || !input.weight_max || !input.life_span || !input.temperaments.length === 0) {
            alert("Complete the required fields (*)")
        } else if (errors.name || errors.height_min || errors.height_max || errors.weight_min || errors.weight_max || errors.life_span || errors.temperaments) {
            alert("Please, review the required data")
        } else {
            setErrors(validate(input))
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
    }

    const handleSelectTemp = (e) => {
        if (input.temperaments.length < 5) {
            setInput({
                ...input,
                temperaments: [...input.temperaments, e.target.value]
            });
            setErrors(validate({
                ...input,
                temperaments: [...input.temperaments, e.target.value]
            }))


        }else {
            alert ("Choose up to 5 options")
        }
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e)
        })
    }




    return (
        <DivFormContainer className="container">
            {/* <Link to="/home"><Button>HOME</Button></Link> */}


            

            <ContainerForm>


                <Form onSubmit={(e) => handleSubmit(e)}>
                    <DivTitleForm>
                        <TitleForm>Create your dog breed</TitleForm>
                    </DivTitleForm>
                    <DivInput>
                        <div>
                            <label>*Name: </label>
                        </div>
                        <InputForm type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} placeholder="name..." />
                        <PForm>{errors.name}</PForm>
                    </DivInput>

                    <DivInput>
                        <div>
                            <label>*Lower height: </label>
                        </div>
                        <InputForm type="text" name="height_min" value={input.height_min} onChange={(e) => handleChange(e)} placeholder="lower height..." />
                        <PForm>{errors.height_min}</PForm>
                    </DivInput>

                    <DivInput>
                        <div>
                            <label>*Higher height: </label>
                        </div>
                        <InputForm type="text" name="height_max" value={input.height_max} onChange={(e) => handleChange(e)} placeholder="higher height" />
                        <PForm>{errors.height_max}</PForm>
                    </DivInput>

                    <DivInput>
                        <div>
                            <label>*Lower weight: </label>
                        </div>
                        <InputForm type="text" name="weight_min" value={input.weight_min} onChange={(e) => handleChange(e)} placeholder="lower height..." />
                        <PForm>{errors.weight_min}</PForm>
                    </DivInput>

                    <DivInput>
                        <div>
                            <label>*Higher weight: </label>
                        </div>
                        <InputForm type="text" name="weight_max" value={input.weight_max} onChange={(e) => handleChange(e)} placeholder="higher weight" />
                        <PForm>{errors.weight_max}</PForm>
                    </DivInput>


                    <DivInput>
                        <div>
                            <label>*Life span: </label>
                        </div>
                        <InputForm type="text" name="life_span" value={input.life_span} onChange={(e) => handleChange(e)} placeholder="life span" />
                        <PForm>{errors.life_span}</PForm>
                    </DivInput>

                    <DivInput>
                        <div>
                            <label>*Temperaments: </label>
                        </div>
                        <SelectForm onChange={(e) => handleSelectTemp(e)}>
                            <option hidden>All temperaments</option>
                            {
                                temperaments && temperaments.map(temp => (
                                    <option key={temp.id} value={temp.name}>{temp.name}</option>
                                ))
                            }
                            
                        </SelectForm>
                    </DivInput>
                    {/* <ul><li>{input.temperaments.map(temp => temp + ", ")}</li></ul> */}
                    <ContainerTemps className="Temps">

                        {
                            input.temperaments.map(t =>

                                <DivTemp style={{ marginLeft: "1rem" }}>

                                    {/* <div style={{ display:"flex", flexDirection:"row" }} key={t}> */}

                                    {<p>{t} <ButtonTemp type="button" onClick={() => handleDelete(t)}>  x</ButtonTemp></p>}
                                    {/* </div> */}
                                </DivTemp>)
                        }
                    </ContainerTemps>
                    <br />
                    <hr />
                    <br />
                    <div style={{ float: "inline-end", display: "block", width: "100%" }}>
                        <ButtonForm type="submit">CREATE</ButtonForm>
                    <Link style={{marginLeft:"20px"}} to="/home"><ButtonForm styled={{marginLeft:"20px"}}>HOME</ButtonForm></Link>
                    </div>
                    

                </Form>
            </ContainerForm>
            
        </DivFormContainer>

    )

}

export default DogCreate