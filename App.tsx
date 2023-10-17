import React, {useEffect, useReducer, useMemo, useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {PaperProvider} from 'react-native-paper';

import {
  DailyFeedContext,
  DailyFeedDispatchContext,
  SummaryCountersContext,
} from './src/Contexts/DailyFeedContext';
import {PreferencesContext} from './src/Contexts/PreferencesContext';

import user from './db/user.json';
import userDietReducer from './src/Reducers/DietReducer';
import userExercisesReducer from './src/Reducers/ExercisesReducer';

import './src/i18n/config';
import {usePreferences} from './src/hooks/usePreferences';

import DrawerMenu from './src/Components/Menu/DrawerMenu';

// import {REACT_APP_EXERCISES_ENDPOINT} from '@env';

function App(): JSX.Element {
  const [exercises, dispatchExercise] = useReducer(
    userExercisesReducer,
    user.exercises,
  );
  const [diet, dispatchDiet] = useReducer(userDietReducer, user.diet);
  const [totalIntake, setTotalIntake] = useState(0);
  const [totalBurn, setTotalBurn] = useState(0);

  const dailyFeedState = useMemo(() => ({diet, exercises}), [exercises, diet]);
  const {preferences} = usePreferences();

  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={preferences}>
        <NavigationContainer theme={preferences.theme}>
          <PaperProvider theme={preferences.theme}>
            <DailyFeedDispatchContext.Provider
              value={{dispatchDiet, dispatchExercise}}>
              <DailyFeedContext.Provider value={dailyFeedState}>
                <SummaryCountersContext.Provider
                  value={{
                    intake: {
                      goal: user.goals.diet,
                      total: totalIntake,
                      setTotal: setTotalIntake,
                    },
                    burn: {
                      goal: user.goals.burn,
                      total: totalBurn,
                      setTotal: setTotalBurn,
                    },
                  }}>
                  <DrawerMenu />
                </SummaryCountersContext.Provider>
              </DailyFeedContext.Provider>
            </DailyFeedDispatchContext.Provider>
          </PaperProvider>
        </NavigationContainer>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
