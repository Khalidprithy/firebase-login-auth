import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import './App.css';
import Login from './components/LogIn/Login';
import { getAuth } from 'firebase/auth'

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <Login></Login>

    </div>
  );
}

export default App;
