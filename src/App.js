
import './App.css';
import React from 'react';

//Import Each Component

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

//Import the parts for the Nav Bar from bootsrtap after installing via npm in cmd

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

//Import the BrowserRouter Routes and Route after installing via npm in cmd 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {

  render() {


    return (
      
      //Wrap Entire return in A Router
      <Router>
        {/* Create a Div and call the css for App from app.css*/}
        <div className="App">
          
          {/* Place a NavBar on top of the page from bootstrap and call it's style from the bootstrap css */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href='/'>Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Create the three links to navigate to the various components */}
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          
          {/* Set The Routes with a route linking to each component */}
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
          </Routes>

          <Routes>
            <Route path='/read' element={<Header></Header>}></Route>
          </Routes>

          <Routes>
            <Route path='/create' element={<Footer></Footer>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
