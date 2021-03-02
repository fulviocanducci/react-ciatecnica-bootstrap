import React, { createContext, useContext, useState } from 'react';

import lists from './users.js';
import initData from './user_init.js';

const UsersContextContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [data, setData] = useState(lists);
  return (
    <UsersContextContext.Provider value={{ data, setData }}>
      {children}
    </UsersContextContext.Provider>
  );
};

export function useUserInitData() {
  return initData;
}

export function useUserToList(filter = 'all') {
  const { data } = useContext(UsersContextContext);
  if (filter !== 'all') {
    if (filter === 'active') {
      return data.filter((x) => x.status);
    } else {
      return data.filter((x) => !x.status);
    }
  }
  return data;
}

export function useUserAdd() {
  const { setData } = useContext(UsersContextContext);
  return (result) => {
    setData((state) => [...state, { ...result, id: state.length + 1 }]);
  };
}

export function useUserEdit() {
  const { setData } = useContext(UsersContextContext);
  return (data) =>
    setData((state) => [
      ...state.map((x) => {
        if (x.id === data.id) {
          return data;
        }
        return x;
      }),
    ]);
}

export function useUserGetById() {
  const { data } = useContext(UsersContextContext);
  return (id) => {
    const result = data.find((x) => x.id === +id);
    if (result) {
      return result;
    }
    return {};
  };
}

export function useUserChangeRemove() {
  const { setData } = useContext(UsersContextContext);
  return (id) => {
    setData((state) =>
      state.map((x) => {
        if (x.id === id) {
          x.status = false;
        }
        return x;
      })
    );
  };
}

export default UsersContextProvider;
