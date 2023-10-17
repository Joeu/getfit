import React, {useContext} from 'react';
import {useTheme, Appbar, Switch} from 'react-native-paper';
import {PreferencesContext} from '../../Contexts/PreferencesContext';

function Header({scene}) {
  const theme = useTheme();
  const {isThemeDark, toggleTheme} = useContext(PreferencesContext);
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      <Appbar.Content title={scene} />

      <Switch color={'blue'} value={isThemeDark} onValueChange={toggleTheme} />
    </Appbar.Header>
  );
}

export default Header;
