import React, {useContext} from 'react';
import {Drawer, Text, Switch} from 'react-native-paper';
import {PreferencesContext} from '../../Contexts/PreferencesContext';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

const ThemeSection = () => {
  const {toggleTheme, isThemeDark} = useContext(PreferencesContext);
  const {t} = useTranslation();

  return (
    <Drawer.Section title={t('preferences')}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text>{t('toggleTheme')}</Text>
        <Switch
          color={'gray'}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>
    </Drawer.Section>
  );
};

export default ThemeSection;
