/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Paginado = ({ allDogs, dogsPage, paginado }) => {
    const pageNum = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPage); i++) {
        pageNum.push(i)
        
    }

    return (
        <nav >
            <ul style={{display: "inline-block"}}>
                <li
                    style={{
                        listStyle: "none",
                    display:"inline"}}>
                    {pageNum?.map(num =>
                        <a style={{ color: "black",
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none"}}
                        onClick={() => paginado(num)} key={num}>{num}</a>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Paginado