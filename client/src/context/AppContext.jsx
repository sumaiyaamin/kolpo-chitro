import React, { useState } from 'react';
import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = (props)=>{

  const [user, setUser] = useState(null)   //for now logged out, when true user logged in
  
  const value = {
    user, setUser
  }

  return(
    <AppContext.Provider value={value}>
      {props.children}

    </AppContext.Provider>
  )



}

export default AppContextProvider;