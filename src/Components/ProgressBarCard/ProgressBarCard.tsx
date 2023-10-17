import React from 'react';
import {Card, Title, ProgressBar} from 'react-native-paper';

export type ProgressCardProps = {
  title: string;
  progress: number;
  imageUrl: string;
};

const ProgressCard = ({title, progress, imageUrl}: ProgressCardProps) => {
  return (
    <Card style={{margin: 16}}>
      <Card.Cover source={{uri: imageUrl}} />
      <Card.Content>
        <Title>{title}</Title>
        <ProgressBar progress={progress} color={'#FF5733'} />
      </Card.Content>
    </Card>
  );
};

export default ProgressCard;
