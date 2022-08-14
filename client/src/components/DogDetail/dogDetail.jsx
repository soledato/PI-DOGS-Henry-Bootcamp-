/* eslint-disable no-unused-vars */
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getDogDetail, resetState } from "../../redux/actions"
import { Link } from "react-router-dom"
import { Button, ContainerDetail, Contenido, ContentDetail1, ContentDetail2, Hr, ImgCardDetail, ParagraphDetail, TitleDetail} from "../StyledPage"
import ImageHome from "../../recursos/huella.png"
import Loader from "../Loader"
import Footer from "../Footer"


const DogDetail = () => {
    const dispatch = useDispatch()
    const dog = useSelector((state) => state.dogDetail)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDogDetail(id))
        dispatch(resetState())
    }, [dispatch, id])


    return (
        <div style={{height:"100vh"}}>


            <ContainerDetail className="header">
            
                <div style={{display:"flex", float:"right"}} >
                    <Link to="/home" style={{ textDecoration: "none" }}><Button style={{width:"70%", height:"70%" }}><h1> HENRY'S DOGS catalogue</h1></Button></Link>
                </div>
            </ContainerDetail>
          

            {
                dog.length > 0 ?
                    
                    <>
                        <ContentDetail2 className="container-image"><ImgCardDetail src={dog[0].image} alt="not found" /></ContentDetail2>
                        <ContentDetail1 className="container-details">
                            <br />
                            <TitleDetail>{dog[0].name.toUpperCase()}</TitleDetail>
                            <Hr />
                            <br />
                            <ParagraphDetail>Temperament: {dog[0].temperament ? dog[0].temperament.toLowerCase() : (dog[0].temperaments && dog[0].temperaments.map((t) => " " + t.name.toLowerCase()))}</ParagraphDetail>
                            <ParagraphDetail>Lower weight: {dog[0].weight_min} kilograms</ParagraphDetail>
                            <ParagraphDetail>Higher weight: {dog[0].weight_max} kilograms</ParagraphDetail>
                            <ParagraphDetail>Lower height: {dog[0].height_min} centimeters</ParagraphDetail>
                            <ParagraphDetail>Higher height: {dog[0].height_max} centimeters</ParagraphDetail>
                            <ParagraphDetail>Life span: {dog[0].life_span}</ParagraphDetail>
                        </ContentDetail1>
                    </>
                    
                    :
                    <Loader style={{width:"60%"}}>
                        <p>loading</p>
                    </Loader>
            }
            <Contenido></Contenido>

            <Footer/>
        </div>
    )

}

export default DogDetail