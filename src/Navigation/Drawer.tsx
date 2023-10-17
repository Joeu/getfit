import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './Bottom';
import Food from '../Screens/Food';
import Exercise from '../Screens/Exercise';
import DrawerContent from '../Components/Menu/DrawerMenuContent';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={t('dailyScreen')} component={BottomNavigator} />
      <Drawer.Screen name={t('searchFood')} component={Food} />
      <Drawer.Screen name={t('searchExercises')} component={Exercise} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
