import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from '../redux/reducers/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  const fetchRandomGreeting = useCallback(() => {
    fetch('http://localhost:3000/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.greeting)));
  }, [dispatch]);

  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
