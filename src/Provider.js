import React, { createContext, useState,useEffect } from 'react';

export const userData = createContext();
export const addData = createContext();
export const updateData = createContext();
export const linkData = createContext();

export default function Provider(props) {
  const [user, setUser] = useState({})
  const [ navFlag ,setNavFlag ] = useState(false);
  const [useradd, setUseradd] = useState("");
  const [updateadd, setUpdateadd] = useState("");
  const [linkadd, setLinkadd] = useState("");

  useEffect(()=>{
    if (localStorage.getItem("x-Auth-token")) {
          setNavFlag(true);
        }
  },[])
  return (
    <userData.Provider value={{ user,navFlag ,setNavFlag, setUser }}>
    <linkData.Provider value={{ linkadd, setLinkadd}}>
     <addData.Provider value={{ useradd, setUseradd }}>
      <updateData.Provider value={{ updateadd, setUpdateadd }}>
       
          {props.children}
      
      </updateData.Provider>
    </addData.Provider>
    </linkData.Provider>
    </userData.Provider>
  )
}
