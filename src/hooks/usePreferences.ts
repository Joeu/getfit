import {useCallback, useMemo, useState} from 'react';
import {CombinedDarkTheme, CombinedDefaultTheme} from '../themes/config';

export const usePreferences = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      theme,
    }),
    [toggleTheme, theme],
  );

  return {preferences};
};
