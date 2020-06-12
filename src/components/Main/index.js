import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import ComoSeparar from '../../screens/ComoSeparar';
import DondeLlevar from '../../screens/DondeLlevar';
import Sponsors from '../../screens/Sponsors';
import Home from '../../screens/Home';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/como-separar" component={ComoSeparar} />
        <Route exact path="/donde-llevar" component={DondeLlevar} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route path="/" render={()=><Redirect to="/" />} />
      </Switch>
    </main>
  );
}
