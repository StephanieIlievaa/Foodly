// import  Home from "././components/home/Home.js";
import Header from "./components/header/Header.jsx"
import './App.css';
import Home from "./components/home/Home.jsx";
import { Grid } from "@mui/material";
import Footer from "./components/footer/Footer.jsx";
import data from './components/data/data.json';
import React, { useState } from 'react';
import Results from "./components/results/Results.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [haveResult, setHaveResult] = useState(true)

  console.log(haveResult);

  return (
    <>
      <div className="App" >
        <Header setSearchTerm={setSearchTerm} />

        <Grid container backgroundColor={'white'} justifyContent="center" sx={{ paddingTop: '140px', paddingBottom: '99px' }}>
          <Grid container justifyContent="center" sx={{ maxWidth: "1320px" }}>
            <Grid item>
              {searchTerm !== ""
                ? <>
                  <Results
                    haveResult={haveResult}
                    setHaveResult={setHaveResult}
                    searchTerm={searchTerm}
                    data={data} />
                </>
                : <>
                  <Home data={data} />
                </>}

              {/* {searchTerm !== { searchTerm }
                ? <>
                  <NoResults
                    searchTerm={searchTerm}
                    data={data} />
                </>
                : <>
                  <Home data={data} />
                </>} */}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div></>
  );
}

export default App;
