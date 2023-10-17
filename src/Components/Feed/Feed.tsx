import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import FeedItem from './FeedItem';

const data = [
  {
    id: '1',
    title: 'Item 1',
    description: 'Descrição do Item 1',
    imageUrl: 'https://via.placeholder.com/150',
    isComplete: false,
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Descrição do Item 2',
    imageUrl: 'https://via.placeholder.com/150',
    isComplete: false,
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'Descrição do Item 3',
    imageUrl: 'https://via.placeholder.com/150',
    isComplete: false,
  },
];

const Feed = () => {
  const [feedData, setFeedData] = useState(data);

  const toggleComplete = itemId => {
    setFeedData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, isComplete: !item.isComplete} : item,
      ),
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={feedData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FeedItem item={item} onToggleComplete={toggleComplete} />
        )}
      />
    </View>
  );
};

export default Feed;
