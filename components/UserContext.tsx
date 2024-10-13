import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  userId: string | null;
  tipoUsuario: 'Colegio' | 'Padre/Estudiante' | null;
  setUser: (id: string, tipo: 'Colegio' | 'Padre/Estudiante') => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [tipoUsuario, setTipoUsuario] = useState<'Colegio' | 'Padre/Estudiante' | null>(null);

  const setUser = (id: string, tipo: 'Colegio' | 'Padre/Estudiante') => {
    setUserId(id);
    setTipoUsuario(tipo);
  };

  const clearUser = () => {
    setUserId(null);
    setTipoUsuario(null);
  };

  return (
    <UserContext.Provider value={{ userId, tipoUsuario, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};