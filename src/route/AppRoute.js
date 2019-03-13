import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageEntry from '../pages/PageEntry';
import PageProjects from "../pages/PageProjects";
import PageIndividual from '../pages/PageIndividual';
import PageAbout from '../pages/PageAbout';

class AppRoute extends Component {
  render() {
    return (
      <div className="browser__router">
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact={true} path="/" component={PageEntry}/>
                    <Route exact={true} path="/projects" component={PageProjects}/>
                    <Route path="/projects/:id" component={PageIndividual}/>
                    <Route path="/about" component={PageAbout}/>
                </Switch>
            </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default AppRoute;