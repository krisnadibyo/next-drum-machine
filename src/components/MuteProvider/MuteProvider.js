'use client';
import React from "react";

export const MuteContext = React.createContext();

function MuteProvider({ children }) {
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <MuteContext.Provider
      value={{isMuted, setIsMuted}}
    >
      {children}
    </MuteContext.Provider>
  );
}

export default MuteProvider;
