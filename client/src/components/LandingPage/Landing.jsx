import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <h1>Bienvenidos a la DOG API</h1>
            <Link to='/home'>
                <button>Click aquí</button>
            </Link>
        </div>
    )

}
