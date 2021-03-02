import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Register from './register';
import { useUserAdd, useUserInitData } from '../../contexts/UsersContext';

function Add() {
  let history = useHistory();
  const [data, setData] = useState(useUserInitData());
  const handleUserAdd = useUserAdd();
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === 'status') {
      value = value === 'active';
    }
    let item = { [name]: value };
    if (name === 'expire' && value === 'no') {
      item['expireDate'] = '';
    }
    setData((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserAdd(data);
    setTimeout(() => {
      history.push('/register/users');
    }, 500);
  };
  return (
    <Register
      data={data}
      onChange={handleOnChange}
      handleSubmit={handleSubmit}
      label="Create"
    />
  );
}

export default Add;
