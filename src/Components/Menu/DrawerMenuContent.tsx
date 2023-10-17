import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Avatar, Divider} from 'react-native-paper';
import ThemeSection from './ThemeSection';
import {styles} from './Styles';

// improve typing
const DrawerContent = (props: any) => (
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

export default DrawerContent;
