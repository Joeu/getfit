import {FlatList, View} from 'react-native';
import React, {useContext} from 'react';

import food from '../../db/food.json';
import {DailyFeedDispatchContext} from '../Contexts/DailyFeedContext';
import ItemCard from '../Components/ListItem/ListItem';
import {DietActions} from '../Reducers/DietReducer';
import useSimulatedFetch from '../hooks/useSimulatedFetch';
import EmptyListScreen from '../Components/Utils/EmptyList';

const getFood = () => {
  // use axios
  return food;
};

export default function Food() {
  const {dispatchDiet} = useContext(DailyFeedDispatchContext);
  const {data, status} = useSimulatedFetch(getFood);

  if (status === 'loading') return <EmptyListScreen message={'Loading...'} />;

  if (status === 'fetched') {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCard
              data={item}
              dispatchAction={dispatchDiet}
              action={{type: DietActions.ADD_FOOD, payload: item}}
            />
          )}
        />
      </View>
    );
  }
}
