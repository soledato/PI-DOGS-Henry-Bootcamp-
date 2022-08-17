/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, filterByBreeds, orderAlphabetic, orderWeight, getAllTemperaments, filterByTemperaments, resetState } from "../../redux/actions";
import Card from "../Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar/SearchBar";
// import DogCreate from "../DogCreate/dogCreate";
import styles from "./home.module.css"
import { CardDiv, DivContainer, HeaderBanner, Header, TitleHeader, ContainerHome, SubtitleHeader, Button, DivOrderFilter, ImageSubtitle, Select } from "../StyledPage";
import DogLogo from "../../recursos/logo-square.png"
import ImageHome from "../../recursos/huella.png"
import Loader from "../Loader";
import Footer from "../Footer";





const Home = () => {

   const dispatch = useDispatch();

   const allDogs = useSelector((state) => state.dogs)
   const allTemperaments = useSelector((state) => state.allTemperaments)
   // console.log(allDogs)
   const [currentPage, setCurrentPage] = useState(1)
   const [dogsPage, setDogsPage] = useState(8)
   const lastDogIndex = currentPage * dogsPage
   const firstDogIndex = lastDogIndex - dogsPage
   const currentDogs = allDogs.slice(firstDogIndex, lastDogIndex)
   const [order, setOrder] = useState('')

   const paginado = (pageNum) => {
      setCurrentPage(pageNum)
   }

   useEffect(() => {
      dispatch(getAllDogs())
      dispatch(getAllTemperaments())
      // dispatch(filterByTemperaments())
   }, [dispatch])


   const handleRefresh = (e) => {
      dispatch(getAllDogs())
   }

   const handleFilterBreeds = (e) => {
      e.preventDefault()
      dispatch(filterByBreeds(e.target.value))

   }

   const handleFilterTemperaments = (e) => {
      e.preventDefault()
      dispatch(filterByTemperaments(e.target.value))
   }

   const handleOrderAlph = (e) => {
      e.preventDefault()
      dispatch(orderAlphabetic(e.target.value))
      setCurrentPage(1)
      setOrder(e.target.value)
   }

   const handleOrderWeight = (e) => {
      e.preventDefault()
      dispatch(orderWeight(e.target.value))
      setOrder(e.target.value)
      setCurrentPage(1)
   }

   return (
      <div style={{height:"100vh"}}>

         <HeaderBanner>
            <div>
               <TitleHeader> HENRY'S DOGS</TitleHeader>
               <SubtitleHeader>catalogue <ImageSubtitle src={ImageHome} alt="img not found"/></SubtitleHeader>
            </div>
         </HeaderBanner>

         <ContainerHome>

            <div>
               <SearchBar />
            </div>

            <div>
               <Button onClick={e => handleRefresh(e)}>Refresh</Button>
               <Link to='/dogs' style={{ textDecoration: "none" }}><Button>Create dog</Button></Link>
            </div>

            <DivOrderFilter>
               <label>ORDER BY NAME </label>
               <Select onChange={e => handleOrderAlph(e)} name="ordenar alfabéticamente" id="">
                  <option hidden>Alphabetic order</option>
                  <option value="asc"> A - Z </option>
                  <option value="desc"> Z - A </option>
               </Select>


               <label>ORDER BY WEIGHT </label>
               <Select onChange={e => handleOrderWeight(e)} id="">
                  <option hidden>Order by weight</option>
                  <option value="asc">  (- kg)  </option>
                  <option value="desc"> (+ kg)  </option>
               </Select>
            </DivOrderFilter>

            <DivOrderFilter>
               <label>FILTER BY TEMPERAMENTS </label>
               <Select onChange={handleFilterTemperaments}>
                  <option value="all">All temperaments</option>
                  {
                     allTemperaments.map(temp => (
                        <option value={temp.name} key={temp.id}>{temp.name}</option>
                     ))}
               </Select>


               <label>FILTER BY BREEDS </label>
               <Select onChange={e => handleFilterBreeds(e)}>
                  <option value="all">All breeds</option>
                  <option value="existent">Existent</option>
                  <option value="created">Created</option>
               </Select>
            </DivOrderFilter>
         </ContainerHome>



         <Paginado key={paginado}
            dogsPage={dogsPage}
            allDogs={allDogs.length}
            paginado={paginado}
         />


         <DivContainer>
            {currentDogs.length? currentDogs.map((e) => {
               return (
                  <Link to={"/dogs/" + e.id} style={{ textDecoration: 'none' }}>
                     <CardDiv key={e}>
                        <Card
                           name={e.name}
                           temperament={e.temperament ? e.temperament.toLowerCase() : (e.temperaments && e.temperaments.map((t) => " " + t.name.toLowerCase()))}
                           weight_min={"Lower weight: " + e.weight_min + " kilograms"}
                           weight_max={"Higher weight: " + e.weight_max + " kilograms"}
                           image={e.image}
                        />
                     </CardDiv>
                  </Link>
               )
            }
            )
            :
            <div>
               <Loader/>
            </div>
         }
         </DivContainer>



         <Footer/>
      </div>

   )
}
export default Home;