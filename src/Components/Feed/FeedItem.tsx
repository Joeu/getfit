import React from 'react';
import {Card, Checkbox, List} from 'react-native-paper';

const FeedItem = ({item, onToggleComplete}) => {
  return (
    <List.Item
      title={item.title}
      description={item.description}
      left={props => (
        <Card.Cover
          {...props}
          source={{uri: item.imageUrl}}
          style={{width: 80, height: 80}}
        />
      )}
      right={() => (
        <Checkbox
          status={item.isComplete ? 'checked' : 'unchecked'}
          onPress={() => onToggleComplete(item.id)}
        />
      )}
    />
  );
};

export default FeedItem;
