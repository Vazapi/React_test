import './App.css';
import Main from '../../pages/main/main';
import Arhive from '../../pages/arhive/arhive';
import Form from '../../pages/form/form';
import FuncNotFound from '../../pages/404/404';
import { AppRoute } from '../../const';



import {BrowserRouter, Route, Switch } from 'react-router-dom' 



function App({events}) {
  return (
    <BrowserRouter>
        <Switch>
           <Route exact path="/">
             <Main events={events}/>
           </Route>
           <Route exact path={AppRoute.ARHIVE}>
             <Arhive events={events}/>
           </Route>
           <Route exact path={AppRoute.EVENT}>
             <Form events={events}/>
           </Route>
           
           <Route exact path="*" component={FuncNotFound}/>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
