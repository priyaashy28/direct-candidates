import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [users, serUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(data);
      serUsers(data);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={{ users }}>{children}</APIContext.Provider>
  );
}

export function UsersApi() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used withing a Provide");
  }
  return context;
}
