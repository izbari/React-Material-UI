import * as React from "react";
interface IContext {
  drawerOpen: boolean;
  searchBoxOpen: boolean;
  setSearchBoxOpen : React.Dispatch<React.SetStateAction<boolean>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UIContext = React.createContext({} as IContext);

export const useUIContext = () => React.useContext(UIContext);

export const UIContextProvider = ({
  children,
}: {
  children:  React.ReactNode[] | React.ReactNode;
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchBoxOpen, setSearchBoxOpen] = React.useState(false);
  const value : IContext = {
    drawerOpen,
    searchBoxOpen,
    setDrawerOpen,
    setSearchBoxOpen
  };

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
};
