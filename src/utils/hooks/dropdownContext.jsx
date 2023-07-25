import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({children}) => {
  const [isDropdownActive, setDropdownActive] = useState(false);

  return (
    <DropdownContext.Provider value={{isDropdownActive, setDropdownActive}}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown doit être utilisé dans le Provider');
  }
  return context;
}
