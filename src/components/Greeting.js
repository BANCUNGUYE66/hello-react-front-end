import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from '../redux/actions/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    // Fetch the random greeting from the API
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = () => {
    fetch('http://localhost:3000/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.greeting)));
  };

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;