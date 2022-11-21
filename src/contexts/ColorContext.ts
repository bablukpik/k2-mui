import React from 'react';

interface IColorContext {
  toggleColorMode: () => void;
}

export const ColorContext = React.createContext<IColorContext>(
  {} as IColorContext,
);
