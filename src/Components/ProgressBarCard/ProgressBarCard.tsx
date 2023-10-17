import React, {useContext} from 'react';
import {Card, Title, ProgressBar} from 'react-native-paper';
import {SummaryCountersContext} from '../../Contexts/DailyFeedContext';

const ProgressCard = ({title, progress}) => {
  return (
    <Card style={{margin: 16}}>
      {/* <Card.Cover source={{uri: 'IMAGE_URL'}} /> */}
      <Card.Content>
        <Title>{title}</Title>
        <ProgressBar progress={progress} color={'#FF5733'} />
      </Card.Content>
    </Card>
  );
};

export default ProgressCard;
