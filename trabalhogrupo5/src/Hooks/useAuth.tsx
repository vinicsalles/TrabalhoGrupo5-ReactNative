import React, { createContext, useContext, useState } from 'react'

const creatorContext = createContext({});

export type PropsContexto = {
    username: string;
    setUsername: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
  }

const ProvedorDeInformaçoes = createContext<PropsContexto>({
    username:'',
    setUsername: () => {},
    password:'',
    setPassword: () => {}
})

export const Auth = ({children}: any) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

  return (
    <ProvedorDeInformaçoes.Provider value={{username, setUsername, password, setPassword}}>
        {children}
    </ProvedorDeInformaçoes.Provider>
  );
}

export const useAuth = () => useContext(ProvedorDeInformaçoes)
