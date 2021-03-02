import Register from './register';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useUserEdit, useUserGetById } from '../../contexts/UsersContext';
import { useParams } from 'react-router-dom';

function Edit() {
  let history = useHistory();
  let { id } = useParams();
  const handleUserGetById = useUserGetById();
  const [data, setData] = useState({ ...handleUserGetById(id) });
  const handleUserEdit = useUserEdit();

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === 'status') {
      value = value === 'active';
      console.log(value);
    }
    setData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEdit(data);
    setTimeout(() => {
      history.push('/register/users');
    }, 500);
  };

  return (
    <Register
      data={data}
      onChange={handleOnChange}
      handleSubmit={handleSubmit}
      label="Edit"
    />
  );
}

export default Edit;
