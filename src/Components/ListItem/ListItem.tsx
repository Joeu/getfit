import React, {useCallback, useState} from 'react';

import {
  Button,
  Snackbar,
  IconButton,
  List,
  Surface,
  Text,
} from 'react-native-paper';
import {styles} from './Styles';
import {Action} from '../../types/action';
import {TimePickerModal} from 'react-native-paper-dates';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

type ListItemProps = {
  data: {
    name: string;
    description: string;
  };
  dispatchAction: (arg: Action) => void;
  action: any;
};

export default function ItemCard({
  data,
  dispatchAction,
  action,
}: ListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [time, setTime] = useState<string>();
  const [timerVisible, setTimerVisible] = useState(false);

  const showTimerModal = () => setTimerVisible(true);
  const {t} = useTranslation();

  const toggleItem = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAdd = () => {
    action.payload.time = time;
    setIsExpanded(false);
    dispatchAction(action);
  };

  const pickTime = useCallback(
    ({hours, minutes}) => {
      const date = new Date();
      date.setHours(hours, minutes);

      setTime(
        date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'}),
      );
      setTimerVisible(false);
    },
    [setTimerVisible],
  );

  return (
    <>
      <Surface elevation={1}>
        <List.Accordion
          title={data.name}
          expanded={isExpanded}
          onPress={toggleItem}>
          <List.Item title={data.description} />
          <View style={styles.actions}>
            <Button onPress={showTimerModal}>{t('time')}</Button>
            <Text>{time}</Text>
            <IconButton icon="plus-box" onPress={handleAdd} />
          </View>
        </List.Accordion>
      </Surface>

      <TimePickerModal
        visible={timerVisible}
        onDismiss={() => setTimerVisible(false)}
        onConfirm={pickTime}
      />
    </>
  );
}
