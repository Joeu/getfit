import {FlatList, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import food from '../../db/food.json';
import {DailyFeedDispatchContext} from '../Contexts/DailyFeedContext';
import ItemCard from '../Components/ListItem/ListItem';
import {DietActions} from '../Reducers/DietReducer';

const getFood = () => {
  // use axios
  return food;
};

export default function Food() {
  const [data, setData] = useState([]);
  const {dispatchDiet} = useContext(DailyFeedDispatchContext);

  useEffect(() => {
    setTimeout(() => {
      setData(getFood());
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
            dispatchAction={dispatchDiet}
            action={{type: DietActions.ADD_FOOD, payload: item}}
          />
        )}
      />
    </View>
  );
}
