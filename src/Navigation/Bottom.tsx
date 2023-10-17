import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from '../Screens/Home';
import {useTranslation} from 'react-i18next';
import {IconButton} from 'react-native-paper';
import DailyDiet from '../Screens/DailyDiet';
import DailyExercises from '../Screens/DailyExercises';

const queryClient = new QueryClient();

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const {t} = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name={t('home')}
          component={Home}
          options={{
            tabBarColor: 'yellow',
            tabBarIcon: () => <IconButton icon="home" size={24} />,
          }}
        />
        <Tab.Screen
          name={t('food')}
          component={DailyDiet}
          options={{
            tabBarIcon: () => <IconButton icon="food-turkey" size={24} />,
          }}
        />
        <Tab.Screen
          name={t('exercises')}
          component={DailyExercises}
          options={{
            tabBarIcon: () => <IconButton icon="run-fast" />,
          }}
        />
      </Tab.Navigator>
    </QueryClientProvider>
  );
}
