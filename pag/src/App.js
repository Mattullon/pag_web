import "./App.css";
import { Container, AppBar, IconButton, Toolbar } from "@mui/material";
import {MediaCard} from "./carta.js";
import { MediaCard2 } from "./carta2";
function App() {
  return (
    <div className="App">
      <Container>
      <AppBar position="fixed">
    <Toolbar>
      <IconButton color="inherit">Menu</IconButton>
      <IconButton color="inherit">Freelancer</IconButton>
    </Toolbar>
    </AppBar>
          <header className="App-header">
            <h1 className="titulo"> The world's best developers, on-demand. </h1>
            <h2 className="cad"><MediaCard/> </h2>
            <h3 className="cad2"><MediaCard2/> </h3>
            

           
          </header>
         
       
      </Container>
    </div>
  );
}

export default App;
