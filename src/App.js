import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainComponent from './pages/Main/Main.Component';
import LoginComponent from './pages/Login/Login.component';
import Header from './components/Header/Header.component';

import { auth, createUser } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await createUser(user);
        userData.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('This state: ', this.state)
          });
        });
      } else {
        console.log(this.state)
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" render={() => (<MainComponent currentUser={currentUser} />)} />
          <Route path="/login" component={LoginComponent} />
        </Switch>
      </div>
    )
  }
}

export default App;
