import {View, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

import exercises from '../../db/exercises.json';
import ItemCard from '../Components/ListItem/ListItem';
import {DailyFeedDispatchContext} from '../Contexts/DailyFeedContext';
import {ExercisesActions} from '../Reducers/ExercisesReducer';

const getExercises = () => {
  // use Axios
  return exercises;
};

export default function Exercise() {
  const [data, setData] = useState([]);
  const {dispatchExercise} = useContext(DailyFeedDispatchContext);

  useEffect(() => {
    setTimeout(() => {
      setData(getExercises());
    }, 1000);
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
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
