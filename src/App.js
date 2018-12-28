import React, { Component } from "react";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAP1ybzoi54SrQeGcF3fZqsfuT-eYmX1sA",
      authDomain: "manager-339c2.firebaseapp.com",
      databaseURL: "https://manager-339c2.firebaseio.com",
      projectId: "manager-339c2",
      storageBucket: "",
      messagingSenderId: "1050873348543"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
