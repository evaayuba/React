import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Register from './component/Register';
import Login from './component/Login';
import Navigation from './component/Admin/Navigation';
import Header from './component/Admin/Header';
import AddStadium from './component/Admin/AddStadium';
import ViewStadium from './component/Admin/ViewStadium'
import ViewOrder from './component/Admin/ViewOrder';
import Footer from './component/Footer';
import MakeOrder from './component/Customer/MakeOrder';



const App = () => {
  return (
    
   <Router>
    <MakeOrder/>
    <Switch>
    
      <Route exact path='/' component={Login} />
      <Route path='/ViewStadium' component={ViewStadium} />
      <Route path='/ViewOrder' component={ViewOrder} />
      <Route path='/reg' component={Register} /> 
      <Route path='fo' component={Footer} />
      <Route path='/Header' component={Header} />
      <Route path='/addStadium' component={AddStadium}/>
      <Route path='/navigation' component={Navigation}/>
      <Route path='/MakeOrder' component={MakeOrder} />
      <Route path='/ViewStadium' component={ViewStadium} />
      
      
    
      
     </Switch>
   </Router>
  );
}

export default App;

