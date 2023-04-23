import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './main/Layout';
import Home from './main/pages/Home'
import Signup from './main/pages/Singup';
import store from './redux/store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='signup' element={<Signup />} />
              <Route path='login' element={<Home />} />
            </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
