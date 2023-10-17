import {Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Modal, Portal} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {styles} from './Styles';
import {TimePickerModal} from 'react-native-paper-dates';

type ActionModalProps = {
  visible: boolean;
  hideModal: () => void;
  action: () => void;
};

const ActionModal = ({visible, hideModal, action}: ActionModalProps) => {
  const {t} = useTranslation();
  const [time, setTime] = useState();
  const [timerVisible, setTimerVisible] = useState(false);

  // const onConfirm = useCallback(({hours, minutes}) => {
  //   setTimerVisible(false);
  //   setTime({hours, minutes});
  // }, []);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
          <Button mode="outlined" onPress={action}>
            {t('add')}
          </Button>
        </Modal>
      </Portal>
      {/* <TimePickerModal
        visible={visible}
        onDismiss={setTimerVisible(false)}
        onConfirm={() => {}}
        hours={12}
        minutes={14}
      /> */}
    </>
  );
};

export default ActionModal;
