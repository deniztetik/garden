import React from "react";
import ReactDOM from "react-dom";
// AppContainer Components
import App from "./components/App";
import Register from "./components/Register";
import Dashboard from "./components/DashContainer/Dashboard";
import EventList from "./components/EventList";
import HostEvent from "./components/HostEvent";
import EventListEntry from "./components/EventListEntry";
// UserContainer Components
import Settings from "./components/SettingsContainer/Settings";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "./store";

const app = document.getElementById('app');

// Provider "provides" all the components here with data from the store.
// browserHistory
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/home" component={App}>
      <IndexRoute component={Dashboard} />
        <Route path="/home/register" component={Register}></Route>
        <Route path="/home/dashboard" component={Dashboard}></Route>
        <Route path="/home/host" component={HostEvent}></Route>
        <Route path="/home/settings" component={Settings}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  app
);
