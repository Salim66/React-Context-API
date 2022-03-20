import React, { useContext } from 'react';
import MsgContext from '../Context/MsgContext';

const Page2 = () => {

  const [msg , handleInputValue] = useContext(MsgContext);

  return (
    <div>{msg}</div>
  )
};

export default Page2;