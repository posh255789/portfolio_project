import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { AuthProvider } from './pages/Auth'
import Contract from './pages/Contract'
import GlobalStyles from'./components/GlobalStyles'
import Header from'./components/Header'

function App() {
  return (
    <AuthProvider>
      <Router>
      <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/contract" component={Contract} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
