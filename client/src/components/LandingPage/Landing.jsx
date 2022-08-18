import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import ImageHome from "../../recursos/huella.png"
import { ALanding, ALink } from "../StyledPage";


export default function Landing() {
    return (
        <div>
            <header className={styles.showcase}>
                <div className={styles.content}>
                    <Link to='/home'>
                        <img src={ImageHome} className={styles.logo} alt="Home" />
                    </Link>
                    <h3 style={{ marginBottom: 0 }}>WELCOME TO </h3>
                    <div style={{ margin: 0 }} className={styles.title}>
                        HENRY'S DOGS
                    </div>
                    <p style={{ margin: 0, fontSize: "20pt" }}>catalogue</p>

                    <div style={{ marginTop: "3rem" }} className={styles.text}>
                        "All knowledge, the totality of all questions and all answers, is contained in the dog".
                        <br />
                        (Franz Kafka)
                    </div>
                </div>
            </header>

            <section className={styles.bgLight}>
                <div className={styles.container}>
                    <div className={styles.grid - 2}>
                        <div className={styles.center}>

                        </div>
                        <div>
                            <h3>About Us</h3>
                            <p>
                                This app was developed as part of the Henry Academy individual project. The technologies used were JavaScript, React, Redux, Node and Sequelize.

                                Here you can browse looking for your favorite breeds; order them alphabetically or by greater and lesser weight;
                                filter them by temperament or origin, and see the details that make each one special. You can even create your own race!
                                If you are a dog lover, this is your place.

                                <p style={{ fontSize: "24pt", margin: 0 }}>Let's go!</p>
                            </p>

                            <p>By <ALanding href="https://www.linkedin.com/in/sole-dato-ok/">Soledad Dato</ALanding>, student of the PartTime06 cohort. 2022</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={`${styles.center} ${styles.bgDark}`}>
                <ALink href="https://unsplash.com/es/@fernandanuso">Picture of Fernanda Nuso in Unsplash</ALink>
                <br />
                <ALink href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</ALink>

            </footer>

        </div>
    )

}
