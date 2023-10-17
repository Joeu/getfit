import React, {useState} from 'react';
import {Card, IconButton, List} from 'react-native-paper';

const TogglableListItem = ({
  item,
  onToggleComplete,
  dispatchAction,
  action,
}) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleCheck = item => {
    setChecked(!checked);
    setDisabled(true);
    onToggleComplete(item);
  };

  const handleDelete = () => {
    dispatchAction(action);
  };

  return (
    <List.Item
      title={`${item.name} - ${item.time || ''}`}
      description={item.description}
      left={() => (
        <Card.Cover
          source={{uri: item.imageUrl}}
          style={{width: 50, height: 50}}
        />
      )}
      right={() => (
        <>
          <IconButton icon="delete" onPress={handleDelete} />
          <IconButton
            disabled={disabled}
            icon={checked ? 'check-bold' : 'check-outline'}
            onPress={() => handleCheck(item)}
          />
        </>
      )}
    />
  );
};

export default TogglableListItem;
