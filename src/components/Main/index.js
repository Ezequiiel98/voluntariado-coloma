import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
/*
import ComoSeparar from '../../screens/ComoSeparar'; 
   import DondeLlevar from '../../screens/DondeLlevar';
 import Home from '../../screens/Home';
  import Sponsors from '../../screens/Sponsors';
  import Contacto from '../../screens/Contacto'; 
*/
const Home = lazy(() => import('../../screens/Home'));
const ComoSeparar = lazy(() => import('../../screens/ComoSeparar'));
const DondeLlevar = lazy(() => import('../../screens/DondeLlevar'));
const Sponsors = lazy(() => import('../../screens/Sponsors'));
const Contacto = lazy(() => import('../../screens/Contacto')); 
export default function Main() {
  return (
    <main>
      <Switch>
        <Suspense fallback={<div>Cargando...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/como-separar" component={ComoSeparar} />
	 
          <Route exact path="/donde-llevar" component={DondeLlevar} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/contacto" component={Contacto} />

          <Route path="/" render={()=><Redirect to="/" />} />
        </Suspense>
      </Switch>
    </main>
  );
}
