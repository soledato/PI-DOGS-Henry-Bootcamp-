/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, filterByBreeds, orderAlphabetic, orderWeight, getAllTemperaments, filterByTemperaments } from "../../redux/actions";
import Card from "../Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar/SearchBar";
import DogCreate from "../DogCreate/dogCreate";


const Home = () => {

   const dispatch = useDispatch();

   const allDogs = useSelector((state) => state.dogs)
   const allTemperaments = useSelector((state) => state.allTemperaments)
   console.log(allDogs)
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

   const handleFilterTemperaments = (e) =>{
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
      <div>
         <div>
         <Link to='/dogs'>Create dog</Link>
         </div>
         <div>
         <SearchBar />
         <h1>Api DOGS</h1>
         <button onClick={e => handleRefresh(e)}>Refresh</button>
         </div>

         <div>
            <select onChange={e => handleOrderAlph(e)} name="ordenar alfabéticamente" id="">
               <option hidden>Alphabetic order</option>
               <option value="asc"> A - Z </option>
               <option value="desc"> Z - A </option>
            </select>

            <select onChange={e => handleOrderWeight(e)} id="">
               <option hidden>Order by weight</option>
               <option value="asc">  (- kg)  </option>
               <option value="desc"> (+ kg)  </option>
            </select>
         </div>

         <div>
            <select onChange={handleFilterTemperaments}>
               <option hidden>All temperaments</option>
               {
                  allTemperaments.map(temp => (
                     <option value={temp.name} key={temp.id}>{temp.name}</option>
                  ))}
            </select>

            <select onChange={e => handleFilterBreeds(e)}>
               <option value="all">All breeds</option>
               <option value="existent">Existent</option>
               <option value="created">Created</option>
            </select>
         </div>

         <Paginado key={paginado}
            dogsPage={dogsPage}
            allDogs={allDogs.length}
            paginado={paginado}
         />
         {currentDogs?.map((e) => {
            return (
               <div key={e.id}>
                  {/* <Link to={'/home/'}> */}
                     <div>
                        <Card

                           name={e.name}
                           temperament={e.temperament ? e.temperament.toLowerCase() : (e.temperaments && e.temperaments.map((t) =>  t.name.toLowerCase()))}
                           weight_min={"Lower weight: " + e.weight_min + " kilos"}
                           weight_max={"Higher weight: " + e.weight_max + " kilos"}
                           image={e.image}
                        />
                     </div>
                  {/* </Link> */}
               </div>
            )
         }
         )}

      </div>

   )
}
export default Home;