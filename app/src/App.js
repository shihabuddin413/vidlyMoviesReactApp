import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Customer from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/not-found'
import Movies from "./components/movies";
import MovieForm from './components/movies/movieForm'
import NavBar from "./components/nav";
import LoginFrom from "./components/forms/Login";
import SignUp from './components/forms/Signup'
import "./App.css";


function App() {
  return (
    <React.Fragment >
      <NavBar />
      <main className="container py-3">
        <Routes>
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/"
            element={<Navigate replace to="/movies" />}
          />
          <Route path="/movies" element={<Movies />} ></Route>
          <Route path="/customers" element={<Customer />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>

          <Route path="*"
            element={<Navigate replace to="/not-found" />}
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
