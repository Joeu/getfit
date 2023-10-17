import {View, FlatList} from 'react-native';
import React, {useContext} from 'react';

import exercises from '../../db/exercises.json';
import ItemCard from '../Components/ListItem/ListItem';
import {DailyFeedDispatchContext} from '../Contexts/DailyFeedContext';
import {ExercisesActions} from '../Reducers/ExercisesReducer';
import EmptyListScreen from '../Components/Utils/EmptyList';
import useSimulatedFetch from '../hooks/useSimulatedFetch';
import {Exercise as ExerciseType} from '../types/entities';

const getExercises = (): Array<any> => {
  // use Axios
  // change typing
  return exercises;
};

export default function Exercise() {
  const {dispatchExercise} = useContext(DailyFeedDispatchContext);
  const {data, status} = useSimulatedFetch(getExercises);

  if (status === 'loading') return <EmptyListScreen message={'Loading...'} />;

  if (status === 'fetched') {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item: ExerciseType) => item.id}
          renderItem={({item}) => (
            <ItemCard
              data={item}
              dispatchAction={dispatchExercise}
              action={{
                type: ExercisesActions.ADD_EXERCISE,
                payload: item,
              }}
            />
          )}
        />
      </View>
    );
  }
}
