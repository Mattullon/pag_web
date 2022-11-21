import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import React from 'react';



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
const Homee = () => <h1> hoasod </h1>



function App() {


  return (
    <div className="App">
     matt
     <Routes>
     <Route index element={<Homee/>} />
     </Routes>
    </div>
  )
}

export default App
