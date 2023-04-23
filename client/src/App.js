import React from 'react';
import {Text, View} from 'react-native';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './main/Layout';
import Home from './main/pages/Home'
import Signup from './main/pages/Singup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
