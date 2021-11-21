import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BottomNavigation } from '@mui/material';
import {BrowserRouter as Router,Route, Routes as Switch} from "react-router-dom";
import {Home} from "./Pages/home/home.index";
import {User} from "./Pages/user/user.index";
import {Player} from "./Pages/player/player.index";
import {Footer} from "./Components/footer";
import {Library} from "./Pages/library/library.index";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
            <Route path={'/'} element={<Home />} />
            <Route path={'/user'} element={<User />} />
            <Route path={'/item/:id'} element={<Player />} />
            <Route path={'/library'} element={<Library />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
