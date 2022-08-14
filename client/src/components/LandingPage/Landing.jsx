import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import ImageHome from "../../recursos/huella.png"

export default function Landing() {
    return (
        <div>
            <header className={styles.showcase}>
                <div className={styles.content}>
                    <Link to='/home'>
                        <img src={ImageHome} className={styles.logo} alt="Home" />
                    </Link>
                    <div className={styles.title}>
                        WELCOME TO HENRY'S DOGS CATALOGUE
                    </div>
                    <div className={styles.text}>
                        All knowledge, the totality of all questions and all answers, is contained in the dog.
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
                            <p>This app was developed as part of the Henry Academy individual project. The technologies used were JavaScript, React, Redux, Node and Sequelize.
                                Made by <a href="https://www.linkedin.com/in/sole-dato-ok/">Soledad Dato</a>, student of the PartTime06 cohort.
                                <p>2022</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={`${styles.center} ${styles.bgDark}`}>
                <a href="https://unsplash.com/es/@fernandanuso">Picture of Fernanda Nuso in Unsplash</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a>

            </footer>

        </div>
    )

}
