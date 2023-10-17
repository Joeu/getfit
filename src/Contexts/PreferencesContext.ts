import {createContext} from 'react';

import {preferences} from '../../db/user.json';
const {theme: defaultTheme} = preferences;

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: defaultTheme === 'dark',
});
