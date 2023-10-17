import React, {useContext, useEffect, useReducer} from 'react';
import {ScrollView} from 'react-native';
import {SummaryCountersContext} from '../Contexts/DailyFeedContext';
import {useTranslation} from 'react-i18next';
import ProgressCard from '../Components/ProgressBarCard/ProgressBarCard';
import {
  COVER_EXERCISE_IMAGE_URL,
  COVER_FOOD_IMAGE_URL,
} from '../Constants/images';

export default function Home() {
  const {t} = useTranslation();
  const {intake, burn} = useContext(SummaryCountersContext);

  return (
    <ScrollView>
      <ProgressCard
        title={`${t('spentKcal')}: ${burn.total}/${burn.goal}`}
        progress={burn.total / burn.goal}
        imageUrl={COVER_FOOD_IMAGE_URL}
      />
      <ProgressCard
        title={`${t('consumedKcal')}: ${intake.total}/${intake.goal}`}
        progress={intake.total / intake.goal}
        imageUrl={COVER_EXERCISE_IMAGE_URL}
      />
    </ScrollView>
  );
}
