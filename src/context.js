import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [lightmode, setLightMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const openLightmode = () => {
    setLightMode(true);
  };
  const closeLightmode = () => {
    setLightMode(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    if (lightmode === true) {
      document.body.style.backgroundColor = `var(--beige)`;
    } else {
      document.body.style.backgroundColor = `var(--main-green)`;
    }
  }, [lightmode]);
  return (
    <AppContext.Provider
      value={{
        lightmode,
        openLightmode,
        closeLightmode,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};

export default AppProvider;
