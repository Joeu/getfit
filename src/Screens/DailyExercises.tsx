import React, {useContext, useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  DailyFeedContext,
  DailyFeedDispatchContext,
  SummaryCountersContext,
} from '../Contexts/DailyFeedContext';
import TogglableListItem from '../Components/ListItem/TogglableListItem';
import EmptyListScreen from '../Components/Utils/EmptyList';
import {useTranslation} from 'react-i18next';
import {ExercisesActions} from '../Reducers/ExercisesReducer';

const DailyExercises = () => {
  const {exercises} = useContext(DailyFeedContext);
  const {burn} = useContext(SummaryCountersContext);
  const {dispatchExercise} = useContext(DailyFeedDispatchContext);
  const {total, setTotal} = burn;

  const {t} = useTranslation();

  const toggleComplete = item => {
    const {fatBurn} = item;
    setTotal(total + fatBurn);
  };

  return (
    <View style={{flex: 1, padding: 8}}>
      {!exercises.length && <EmptyListScreen message={t('emptyExercises')} />}

      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TogglableListItem
            item={item}
            onToggleComplete={toggleComplete}
            dispatchAction={dispatchExercise}
            action={{
              type: ExercisesActions.DELETE_EXERCISE,
              payload: item,
            }}
          />
        )}
      />
    </View>
  );
};

export default DailyExercises;
