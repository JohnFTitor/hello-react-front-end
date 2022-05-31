import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  });

  return (
    <h1>
      Random Greeting:
      { ` ${greeting}` }
    </h1>
  );
};

export default Greeting;
