/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsbyName, resetByName } from "../../redux/actions";
import { Button, ButtonSearch, DivSearchBar, Input, SearchInput, WrapperSearchBar } from "../StyledPage";



const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("")





    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    const handleSubmit = (e) => {
        if (name.length < 3) {
            alert("Enter at least three characters")
        }
        e.preventDefault();
        dispatch(getDogsbyName(name))
        setName(e.target.value = "")
    }

    return (
        <WrapperSearchBar>
            <DivSearchBar>
                <SearchInput type="text" placeholder="search..." onChange={e => handleChange(e)} value={name} />
                <ButtonSearch type="submit" onClick={(e) => handleSubmit(e)}>CLICK</ButtonSearch>
            </DivSearchBar>
        </WrapperSearchBar>


    )
}

export default SearchBar;