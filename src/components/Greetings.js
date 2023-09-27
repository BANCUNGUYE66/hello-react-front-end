import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messagesSlice';

const Greetings = () => {
  const message = useSelector((state) => state.messages.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>My greetings</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default Greetings;
