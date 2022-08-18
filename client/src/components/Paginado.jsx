/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NumberPaginate, PaginationContainer } from './StyledPage'


const Paginado = ({ allDogs, dogsPage, paginado }) => {

    const pageNum = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPage); i++) {
        pageNum.push(i)

    }

    return (
        <nav >
            <PaginationContainer>

                <ul style={{ display: "inline-block" }}>
                    <li
                        style={{
                            listStyle: "none",
                            display: "inline"
                        }}>
                        {pageNum?.map(num =>
                            <NumberPaginate 
                                onClick={() => paginado(num)} key={num}>{num}
                            </NumberPaginate>
                        )}
                    </li>
                </ul>
            </PaginationContainer>
        </nav>
    )
}

export default Paginado