import "./App.css";
import { useRef } from "react";
import { MediaCard} from "./components/card";
import { MediaCard2 } from "./components/Card2";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { MediaCard3 } from "./components/card3";

function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const irAlaSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })

  }
  return (
    
    <div className="App">
      <div className="hero">
        <Container>
        <AppBar position="fixed">
    <Toolbar>
    <h5 className="v">...</h5>
      <IconButton onClick={() => irAlaSeccion(services) } className="link" color="inherit" displey="flex" >
        INICIO </IconButton><h5 className="v">..................................................................................................................</h5>
      <IconButton onClick={() => irAlaSeccion(blog) } className="link"  color="inherit">
        DEVELOPERS</IconButton><h5 className="v">............................................................................................</h5>
      <IconButton onClick={() => irAlaSeccion(contact) } className="link"  color="inherit">
        LOGIN</IconButton>
    </Toolbar>
    </AppBar>
    </Container>
      </div>
      <div ref={services} className="services">
      <h5 className="f">...</h5>
        <h3 className="big"> The world's best developers, on-demand. </h3>
        <h4 className="big">
        Work with an Agile developer
        </h4>
        <p>Agile Tribe matches start-ups with the best remote developers, however, just in case you didn't realise, our rates are 50% cheaper than the industry average and we don't charge ridiculous mark-ups (only 25%).

          To top it off, all our developers have successfully completed our technical vetting which includes a 2-stage interview process, soft-skills test and a technical assessment. 
        </p>

        
        

        
      </div>
      <div ref={blog} className="blog">
      <h5 className="f">...</h5>
        <h3 className="strong"> DEVELOPERS </h3>
        <h4 className="card">
          <h5 className="f">...</h5> <MediaCard/>
          <h5 className="f">... </h5> <MediaCard2/>
          <h5 className="f">... </h5> <MediaCard3/> 
        </h4>
       
        
       
      </div>
      <div ref={contact} className="contact">
        <h3> LOGIN </h3>
      </div>
    </div>
  
  );
}

export default App;
