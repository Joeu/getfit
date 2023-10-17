import React, {useState} from 'react';
import {Card, IconButton, List} from 'react-native-paper';
import {SMALL_IMAGE_URL} from '../../Constants/images';
import {Action} from '../../types/action';
import {Exercise, Food} from '../../types/entities';

type TogglableListItemProps = {
  item: Food | Exercise;
  onToggleComplete: (arg?: any) => void;
  dispatchAction: (arg: any) => void;
  action: Action;
};

const TogglableListItem = ({
  item,
  onToggleComplete,
  dispatchAction,
  action,
}: TogglableListItemProps) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleCheck = (item: Food | Exercise) => {
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
          source={{uri: SMALL_IMAGE_URL}}
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
