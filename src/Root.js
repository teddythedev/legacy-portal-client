import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { configureStore } from "./stores/store";
import App from './App';
import Dashboard from './pages/Dashboard';
import Roster from './pages/Roster';
import NavigationBar from './components/NavigationBar';

const Root = () => {
   const store = configureStore();

   return (
       <Provider store={store}>
           <BrowserRouter>
                <App>
                    <NavigationBar/>
                    <div className='content-container'>
                        <Route
                            path={'/'}
                            component={Dashboard}
                            exact
                        />
                        <Route
                            path={'/roster'}
                            component={Roster}
                            exacty
                        />
                    </div>
                </App>
           </BrowserRouter>
       </Provider>
   )
};

export default Root;