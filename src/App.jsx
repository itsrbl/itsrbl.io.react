import './App.css'
import { useState } from 'react';
import * as jwt_decode from 'jwt-decode'

function App() {
  const [token, setToken] = useState('');

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return jsonPayload;
  }

  return (
    <div className="App">
      <p>HelloWorld</p>
      <input type="text" onChange={(e) => setToken(e.target.value)} />
      <button onClick={(e) => alert(parseJwt(token))}>Show</button>
    </div>
  )
}

export default App