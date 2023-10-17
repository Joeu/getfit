import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Avatar, Divider} from 'react-native-paper';
import BottomNavigator from '../../Navigation/Bottom';
import ThemeSection from './ThemeSection';
import {useTranslation} from 'react-i18next';
import {styles} from './Styles';
import Food from '../../Screens/Food';
import Exercise from '../../Screens/Exercise';

const Drawer = createDrawerNavigator();

const DrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <View style={styles.container}>
      <Avatar.Image
        source={{
          uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
        }}
        size={50}
      />
      <View style={styles.links}>
        <DrawerItemList {...props} />
      </View>
      <Divider />
      <ThemeSection />
    </View>
  </DrawerContentScrollView>
);

const DrawerMenu = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={t('dailyScreen')} component={BottomNavigator} />
      <Drawer.Screen name={t('searchFood')} component={Food} />
      <Drawer.Screen name={t('searchExercises')} component={Exercise} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
