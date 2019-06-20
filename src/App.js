import React, {Component} from 'react';
import './App.css';
import {Route,Switch,HashRouter} from 'react-router-dom'
import Login from './Login/Login';
import Footer from './Footer/Footer';
import HomePage from './Home/Home';
import MediaCard from './cards';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     data: {}
   }
 }
  getUserData = (data, props) => {
    this.setState({data});
    props.history.push('/home');
  }
  render() {
    return (
      <div className="App"> 
        <HashRouter>
        <Switch>
          <Route path="/" render={()=> <Login getUserData={this.getUserData} />} exact />
          <Route path="/login" render={()=> <Login getUserData={this.getUserData} />}  />
          <Route path="/home" render={() => <HomePage data={this.state.data}/> } />
          </Switch>
          <MediaCard />
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default (App);
