import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume'

const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/aboutme" component={Aboutme}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/project" component={Project}/>
        <Route  path="/resume" component={Resume}/>
    </Switch>
)

export default Main;

