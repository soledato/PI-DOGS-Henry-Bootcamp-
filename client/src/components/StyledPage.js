import styled from "styled-components"
import BackImage from "../recursos/landing-editada.png"

//#region -------------------CARDS STYLES-------------------------

export const CardDiv = styled.div`
position: relative;
overflow: hidden;
text-align: center;
align-items: center;
font-size: 15px;
font-family: 'Mukta Malar', sans-serif;
color: #211E1C;
width: 300px;
height: 420px;
background-color: white;
border-radius: 3px 3px;
padding-bottom: 20px;
border: 3px solid white;
vertical-align: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 0.5s ease;
&:hover{
  transform: scale(1.05) translateZ(0);
  filter: brightness(0.9) contrast(1.1) ;
}
`

export const DivContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
justify-content: center;
align-items: center;
row-gap: 40px;
column-gap: 40px;
margin-bottom: 50px;
overflow: inherit;
padding: 30px;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  `

export const CardHeaderImg = styled.img`
width: 100%;
height: 180px;
border-radius: 3px 3px 0px 0px;
`
//#endregion
//#region ------------------PAGINATE STYLE------------------------

export const PaginationContainer = styled.ul`
display: flex;
justify-content: center;
`
export const NumberPaginate = styled.a`
color: ${(props) => (props.isActive ? "white" : "#211E1C")};
background-color: ${(props) => (props.isActive ? "#AF125A" : "white")};
cursor: pointer;
float: left;
padding: 8px 8px 8px 8px;
text-decoration: none;
text-align: center;
vertical-align: center;
border-radius: 2px;
transition: background-color .3s;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
margin: 2px;
width: 25px;
font-weight: 400;

&:hover{
  color: white; 
  background-color: #B57E5A;
}
@media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
//#endregion
//#region --------------------HOME STYLE--------------------------

export const ContainerHome = styled.div`
display: flex;
background-color: rgba(62,78,80, 0.3);
justify-content: space-around;
align-items: center;
box-sizing: border-box;
height: 150px;
flex-direction: row;

@media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Header = styled.div`
height: 360px;
z-index: 10;
`
export const HeaderBanner = styled.div`
background-color: #333;
background-image: url("/header.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 250px;
`
export const TitleHeader = styled.h1`
color: #fff;
padding: 0 1rem;
position: absolute;
top: 2rem; 
left: 2rem;
font-size: 45pt;
margin: 50px 0 40px 40px
`
export const SubtitleHeader = styled.h2`
color: #fff;
position: absolute;
padding: 0 1rem;
top: 3rem; 
left: 2rem;
margin: 97px 0 40px 43px;
font-size: 20pt;
color: #211E1C
`
export const ImageSubtitle = styled.img`
height: 1.1rem;
width: 1.1rem;
`
export const Button = styled.button`
font-family: 'Mukta Malar', sans-serif;
height: 2.5rem;
width: 9em;
box-sizing: border-box;
appearance: none;
background-color: transparent;
border: 1px solid black;
border-radius: 0.2em;
color: #211E1C;
cursor: pointer;
display: inline-block;
align-self: center;
font-size: 0.9rem;
line-height: 1;
overflow: hidden;
margin: 20px;
padding: 0.5em 0.5em;
text-decoration: none;
text-align: center;
text-transform: uppercase;
font-weight: 700;
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
&:hover {
  box-shadow: 0 0 40px 40px #211E1C inset;
  color: white;
};
&:focus {
  color: #fff;
} 
`
export const DivOrderFilter = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(2,1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
justify-items: start;
align-items: center;
`

export const Select = styled.select`
width: 100%;
padding: 5px;
margin: 2px auto 2px auto;
border-radius: 2px;
`
//#endregion
//#region -----------------SEARCHBAR STYLE------------------------

export const WrapperSearchBar = styled.div`
width: 100%;
max-width: 31.25rem;
margin: 6rem auto;
`

export const DivSearchBar = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
`
export const SearchInput = styled.input`
width: 100%;
height: 2.5rem;
background: #f5f5f5;
outline: none;
border: 1px solid black;
border-radius: 1.6rem;
padding: 0 3.5rem 0 1.5rem;
font-size: 1rem;
`

export const ButtonSearch = styled.button`
width: 3.5rem;
height: 2.5rem;
margin-left: -3.28rem;
background-color: #B57E5A;
border-radius: 0 1.6rem 1.6rem 0;
border: none;
outline: none;
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
&:hover {
cursor: pointer;
box-shadow: 0 0 40px 40px #211E1C inset;
color: white};
&:focus {
color: #fff;
}
`
//#endregion
//#region --------------------DOG DETAIL--------------------------

export const ImgCardDetail = styled.img`
width: 100%;
height: 42.8rem;
box-sizing: content-box;
border-radius: 3px;
`
export const ContainerDetail = styled.div`
display: grid;
width: 100%;
height: 10rem;
background-color: #D0CDC8;
`
export const Contenido = styled.div`
width: 100%;
height: 7.6rem;
background-color: #D0CDC8;
float: left;
border-top: 2px solid #211E1C;
`

export const ContentDetail1 = styled.div`
width: 40.01%;
height: 42.8rem;
background-color: #211E1C;
border: 2px solid #211E1C;
float: left;
vertical-align: center;
justify-content: center;
margin-left: 0.07px;
color: white;
`

export const ContentDetail2 = styled.div`
width: 59.5%;
height: 42.8rem;
background-color: #D0CDC8;
border: 2px solid #211E1C;
float: left;
`
export const ParagraphDetail = styled.p`
font-size: 23px;
text-align: left;
margin-left: 3%;
width: 100% ;
`
export const TitleDetail = styled.h2`
font-size: 30px;
`
export const Hr = styled.hr`
width: 70%
`

//#endregion
//#region -------------------LOADER STYLE-------------------------

export const DivLoader = styled.div`
display: block;
align-items: center;
`
//#endregion
//#region --------------------FORM STYLE--------------------------


export const DivFormContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
/* margin-top: 4rem; */
width: 100%;
background-image: url(${BackImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
    width: 100%;
`
export const ContainerForm = styled.div`
display: block;
text-align: left;
padding:2em;
box-sizing: border-box;
justify-content: left;
width: 50%;
background-color: #f5f5f5;
opacity: 0.8;
border: 1px, solid, black;
border-radius: 4px;
`
export const Form = styled.form`
display: block;
align-items: left;
justify-content: left;
`
export const DivTitleForm = styled.div`
display: block;
`
export const TitleForm = styled.h2`
display: block;
text-align: left;
`
export const DivInput = styled.div`
display: block;
margin-top: 1rem;
justify-content: center;
`
export const InputForm = styled.input`
width: 25rem;
padding: 5px;
border-radius: 4px;
border: solid 1px #211E1C;
`
export const SelectForm = styled(Select)`
width: 25.7rem;
border: 1px solid black;
border-radius: 4px; 
height: auto
`
export const PForm= styled.p`
color:#B57E5A;
margin: 0 0 0 1px;
`
export const ContainerTemps = styled.div`
width: 100%; 
display: flex; 
align-content: center;
justify-content: left;
margin-top: 1em; 
`
export const DivTemp= styled.div`
margin-left: 1em;
font-weight: 600;
`
export const ButtonForm= styled.button`
font-family: 'Mukta Malar', sans-serif;
height: 2.5rem;
width: 9em;
box-sizing: border-box;
color: white;
background-color: #211E1C;
appearance: none;
border: 1px solid black;
border-radius: 0.2em;
cursor: pointer;
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
font-size: 0.9rem;
font-weight: 700;
&:hover{
  box-shadow: 0 0 40px 40px #ffffff inset;
  color: #211E1C;
}
`

export const ButtonTemp = styled.button`
color: white;
background-color: #211E1C;
border-radius: 0.2em;
border: 1px solid black;
`
//#endregion

//#region-------------FOOTER STYLE------------------------

export const DivFooter = styled.div`
display: block;
height: 2rem;
background-color: #211E1C;
color: white;
justify-content: center;
text-align: center;
`
export const BtnDelete = styled(ButtonForm)`
background-color: #A72530;
&:hover{
  box-shadow: 0 0 40px 40px #ffffff inset;
  color: #211E1C;
}
`

//#endregion