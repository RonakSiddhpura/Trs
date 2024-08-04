import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  useEffect(() => {
    axios.get(`${apiUrl}/api/jokes`)
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, [apiUrl]);

  return (
    <>
      <h1>Chai and FullStack</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
