import React, { useMemo, useState } from 'react';
import { NavigationProps } from '../../utils/types';

export const NavigationContext = React.createContext<NavigationProps>(
  {} as NavigationProps
);

function NavigationProvider({ children }: any) {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const value: NavigationProps = useMemo(
    () => ({ currentIndex, setCurrentIndex }),
    [currentIndex, setCurrentIndex]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
