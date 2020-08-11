import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Loader from 'components/Loader';
import styles from './index.module.scss';
 
const Home = lazy(() => import('screens/Home'));
const ComoSeparar = lazy(() => import('screens/ComoSeparar'));
const DondeLlevar = lazy(() => import('screens/DondeLlevar'));
const Sponsors = lazy(() => import('screens/Sponsors'));
const Contacto = lazy(() => import('screens/Contacto'));

export default function Main() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/como-separar" component={ComoSeparar} />
          <Route exact path="/donde-llevar" component={DondeLlevar} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="/" render={()=><Redirect to="/" />} />
        </Switch>
      </Suspense>
    </main>
  );
}
