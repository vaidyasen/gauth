import logo from './logo.svg';
import './App.css';
import LogOutButton from './components/logout';
import LoginButton from './components/login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "246111570105-kmldrfvpkn5i08vil96arof76a99260c.apps.googleusercontent.com";
// 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

const App = () => {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <LoginButton />
      <LogOutButton />

    </div>
  );
}

export default App;
