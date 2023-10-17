import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {
  SummaryCountersContext,
  DailyFeedContext,
  DailyFeedDispatchContext,
} from '../Contexts/DailyFeedContext';
import TogglableListItem from '../Components/ListItem/TogglableListItem';
import EmptyListScreen from '../Components/Utils/EmptyList';
import {useTranslation} from 'react-i18next';
import {DietActions} from '../Reducers/DietReducer';

const DailyDiet = () => {
  const {diet} = useContext(DailyFeedContext);
  const {intake} = useContext(SummaryCountersContext);
  const {dispatchDiet} = useContext(DailyFeedDispatchContext);
  const {total, setTotal} = intake;

  const {t} = useTranslation();

  const toggleComplete = item => {
    const {calories} = item.nutritionFacts;
    setTotal(total + calories);
  };

  return (
    <View style={{flex: 1, padding: 8}}>
      {!diet.length && <EmptyListScreen message={t('emptyDiet')} />}

      <FlatList
        data={diet}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TogglableListItem
            item={item}
            onToggleComplete={toggleComplete}
            dispatchAction={dispatchDiet}
            action={{
              type: DietActions.DELETE_FOOD,
              payload: item,
            }}
          />
        )}
      />
    </View>
  );
};

export default DailyDiet;
