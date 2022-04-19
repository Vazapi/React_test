import './App.css';
import Main from '../../pages/main/main';
import Arhive from '../../pages/arhive/arhive';
import Form from '../../pages/form/form';
import FuncNotFound from '../../pages/404/404';
import { AppRoute } from '../../const';

import {BrowserRouter, Route, Switch } from 'react-router-dom' 



function App() {
  return (
    <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Main}/> 
           <Route exact path={AppRoute.ARHIVE} component={Arhive}/>
           <Route exact path={AppRoute.EVENT} component={Form}/>
           
           <Route exact path="*" component={FuncNotFound}/>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
