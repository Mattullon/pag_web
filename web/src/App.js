import "./App.css"
import { useRef } from "react";
import { MediaCard } from "./components/card";
import { MediaCard2 } from "./components/Card2";
import { AppBar, Button, IconButton, Input, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { MediaCard3 } from "./components/card3";
import { MediaCard4 } from "./components/card4";
import { MediaCard5 } from "./components/card5";

function App() {
  const inicio = useRef(null);
  const developers = useRef(null);
  const login = useRef(null);

  const irAlaSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="hero">
        <Container>
          <AppBar className="bar">
            <Toolbar className="tbar">
              <IconButton
                onClick={() => irAlaSeccion(inicio)}
                className="link"
                color="inherit"
              >
                INICIO{" "}
              </IconButton>
              <IconButton
                onClick={() => irAlaSeccion(developers)}
                className="link"
                color="inherit"
              >
                FUNDADORES
              </IconButton>
              <IconButton
                onClick={() => irAlaSeccion(login)}
                className="link"
                color="inherit"
                variant="contained"
              >
                INSCRIPCION
              </IconButton>
            </Toolbar>
          </AppBar>
        </Container>
      </div>
      <div ref={inicio} className="inicio">
        <h3 className="big"> BIENVENIDOS ! </h3>
        <h4 className="big">
          Este seria el Primer Torneo Para Desarrolladores de Apps En Todo el
          Paraguay !
        </h4>
        <h5 className="Tparrafo">
          <p className="parrafo">
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>{" "}
          <p2 className="parrafo">
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p2>{" "}
        </h5>
      </div>
      <div ref={developers} className="fundadores">
        <h3 className="strong"> DEVELOPERS </h3>
        <h4 className="card">
          <MediaCard className="card1"></MediaCard>
          <MediaCard2 className="card1"></MediaCard2>
          <MediaCard3 className="card1"></MediaCard3>
          <MediaCard4 className="card1"></MediaCard4>
          <MediaCard5 className="card1">  </MediaCard5>
        </h4>
      </div>
      <div ref={login} className="login">
        <h3 > INSCRIPCION </h3>
        <h4 className="texto_login">
          <ul> 
            <li>
            nombre : <Input> </Input>
            </li>
            <li>
            apellido : <Input> </Input>
            </li>
            <li>
            Gmail : <Input> </Input>
            </li>
            <li>
            Contacto : <Input> </Input>
            </li>
  
          </ul>
         
        </h4>
        <Button fullWidth variant="contained"> Inscribirse </Button>
      </div>
    </div>
  );
}

export default App;
