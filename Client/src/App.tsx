
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/api/child/login'} element={<Login role='child'/>} />
          <Route path={'/api/child/signup'} element={<SignUp role='child'/>} />
          <Route path={'/api/teacher/login'} element={<Login role='teacher'/>} />
          <Route path={'/api/teacher/signup'} element={<SignUp role='teacher'/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
