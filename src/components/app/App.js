import './App.css';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import FuncNotFound from '../../pages/404/404';
import { AppRoute } from '../../const';
import {observer} from 'mobx-react-lite';


import {BrowserRouter, Route, Switch } from 'react-router-dom' 



const App = observer(
  () => {
    return (
      <BrowserRouter>
          <Switch>
             <Route exact path="/">
               <Main />
             </Route>
             <Route exact path={AppRoute.ARCHIVE}>
               <Archive />
             </Route>
             <Route exact path={AppRoute.EVENT}>
               <Form />
             </Route>
             
             <Route exact path="*" component={FuncNotFound}/>
          </Switch>
      </BrowserRouter>
    )
  }
)

export default App;
