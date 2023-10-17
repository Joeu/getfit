import React, {useEffect, useState} from 'react';

const useSimulatedFetch = getter => {
  const [data, setData] = useState([]);
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
