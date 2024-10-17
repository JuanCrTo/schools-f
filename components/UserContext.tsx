import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

interface UserContextType {
  userId: string | null;
  tipoUsuario: "Colegio" | "Padre/Estudiante" | null;
  setUser: (id: string, tipo: "Colegio" | "Padre/Estudiante") => void;
  clearUser: () => void;
  isLoading: boolean;
  refreshUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [tipoUsuario, setTipoUsuario] = useState<
    "Colegio" | "Padre/Estudiante" | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserData = useCallback(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedTipoUsuario = localStorage.getItem("tipoUsuario") as
      | "Colegio"
      | "Padre/Estudiante"
      | null;

    if (storedUserId && storedTipoUsuario) {
      setUserId(storedUserId);
      setTipoUsuario(storedTipoUsuario);
    } else {
      setUserId(null);
      setTipoUsuario(null);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  const setUser = (id: string, tipo: "Colegio" | "Padre/Estudiante") => {
    console.log("Setting user:", id, tipo);
    setUserId(id);
    setTipoUsuario(tipo);
    localStorage.setItem("userId", id);
    localStorage.setItem("tipoUsuario", tipo);
  };

  const clearUser = () => {
    setUserId(null);
    setTipoUsuario(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("tipoUsuario");
  };

  const refreshUser = () => {
    loadUserData();
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        tipoUsuario,
        setUser,
        clearUser,
        isLoading,
        refreshUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext debe ser utilizado dentro de un UserProvider"
    );
  }
  return context;
};
