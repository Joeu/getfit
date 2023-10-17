import React, {useEffect, useState} from 'react';
import {Combined, Exercise, Food} from '../types/entities';

const useSimulatedFetch = (getter: () => Array<Combined>) => {
  const [data, setData] = useState<Array<any>>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('loading');
    const simulateFetch = setTimeout(() => {
      const result = getter();
      setData(result);
      setStatus('fetched');
    }, 1000);

    return () => clearTimeout(simulateFetch);
  }, []);

  return {data, status};
};

export default useSimulatedFetch;
