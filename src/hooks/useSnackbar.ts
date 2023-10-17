import {useState} from 'react';

const useSnackbar = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const openSnack = (msg: string) => {
    setMessage(msg);
    setShow(true);
  };

  return {show, setShow, message, openSnack};
};

export default useSnackbar;
