
import { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const baseURL = `http://localhost:3000/user`;
  //const [user,setUser] = useState([]);
  useEffect(() => {
      async function fetUser(){
        const response = await axios.get(baseURL);
        console.log(response.data)
      }
      fetUser();
  },[])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
