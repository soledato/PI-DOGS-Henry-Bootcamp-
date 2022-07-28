import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card";

const Home = () => {
   const dispatch = useDispatch();

   const allDogs = useSelector((state) => state.dogs)

   useEffect(() => {
      dispatch(getDogs())
   }, [dispatch])


   const handleRefresh = (e) => {
      dispatch(getDogs())
   }

   return (
      <div>
         <Link to='/dog'>Create dog</Link>
         <h1>Todos los perros</h1>
         <button onClick={handleRefresh}>Cargar de nuevo</button>
         <div>
            <select name="ordenar alfabéticamente" id="">
               <option value="asc"> A - Z </option>
               <option value="desc"> Z - A </option>
            </select>
            <select name="ordenar por peso" id="">
               <option value="kg_desc">+ kg</option>
               <option value="kg_asc"> - Kg</option>
            </select>
         </div>
         <div>
            <select name="" id="">
               <option value="temperamento">Temperamento</option>
            </select>
            <select name="filtrar" id="">
               <option value="todas">Todas las razas</option>
               <option value="existente">Razas existentes</option>
               <option value="creada">Razas creadas por el usuario</option>
            </select>
         </div>



         {allDogs?.map((e) => {
            return (
               <div key={e.id}>
                  <Link to={'/home/'}>
                     <Card

                        name={e.name}
                        temperament={e.temperament}
                        weight_min={e.weight_min}
                        weight_max={e.weight_max + " kilos"}
                        image={e.image}
                     />
                  </Link>
               </div>
            )
         }
         )}

      </div>

   )
}
export default Home;