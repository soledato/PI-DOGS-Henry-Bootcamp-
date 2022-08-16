import React from "react"
import Loading from "../recursos/Ball-loader.gif"
import { DivLoader} from "./StyledPage"

const Loader = () => {
    return (
        <DivLoader>
            <img src={Loading} alt="" />
        </DivLoader>
    )
}

export default Loader