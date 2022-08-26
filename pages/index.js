import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Image from 'next/image'
import Logo from "/public/IFTTB-1.png"

import Tabsshow from './stockTicker.js'

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {

    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });

    const data = await response.json();

    setResult("Stocks according to your search\n " + data.result);
    setAnimalInput("");

    console.log(data.result)

    let eachStock = data.result.split(", ");

    // eachStock[0]
    // eachStock[1]
    // {eachStock[2]}
    // console.log(eachStock);

  }

  return (

    <div className={styles.div}>

      <Head>
        <title>OpenAI Quickstart</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/dog.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,300&family=Raleway:wght@600&display=swap');
        </style>
      </Head>

      <main className={styles.main}>

        <div className="top">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="/">
              <Image className={styles.logo} class="logo" width="200px" height="200px" src={Logo} title="" alt="" /> </a>

          </nav>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className={styles.bigHeading}>
              Get stock recommendations with an AI researching for you
            </h1>
          </div>
          <div className={styles.if} className="col-lg-6">
            <div className="logo" class="answers">
              <h1 className={styles.title}>If</h1>
              <form onSubmit={onSubmit}>
                <input
                  autocomplete="off"
                  type="text"
                  name="animal"
                  //placeholder="Enter an Industry"
                  placeholder="enter an event"
                  value={animalInput}
                  onChange={(e) => setAnimalInput(e.target.value)}
                />
                <input type="submit" value="Generate stocks" />
              </form>
            </div>

          </div>
        </div>

        <div className={styles.center}>

          <div className={styles.result}>{result !== undefined && result.split(", ")[0] + " "}

            <hr>
            </hr>
            <hr>
            </hr>

            <button className={styles.but} id="stock1" type="button" class="btn btn-success">
              {result !== undefined && result.split(", ")[1]}</button>
            <button className={styles.but} id="stock2" type="button" class="btn btn-success">
              {result !== undefined && result.split(", ")[2]}</button>

          </div>
        </div>





      </main>


    </div >
  );
}


