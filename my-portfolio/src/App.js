import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
  <Layout>
 <Header className="header-color"  title={<Link style={{textDecoration:'none',color:'white'}} to="/">MY PORTFOLIO</Link> } scroll>
        <Navigation>
            <Link to="/project">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">Aboutme</Link>
            <Link to="/contact">Contact</Link>
        </Navigation>
    </Header>

    <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to="/">MY PORTFOLIO</Link> }>
        <Navigation>
        <Link to="/project">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/aboutme">Aboutme</Link>
        <Link to="/contact">Contact</Link>
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />
        <Main/>
    </Content>
</Layout>
</div>

    );
  }
}

export default App;
