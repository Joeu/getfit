import React, {useContext, useEffect, useReducer} from 'react';
import {ScrollView} from 'react-native';
import {SummaryCountersContext} from '../Contexts/DailyFeedContext';
import {useTranslation} from 'react-i18next';
import ProgressCard from '../Components/ProgressBarCard/ProgressBarCard';

export default function Home() {
  const {t} = useTranslation();
  const {intake, burn} = useContext(SummaryCountersContext);

  return (
    <ScrollView>
      <ProgressCard
        title={`${t('spentKcal')}: ${burn.total}/${burn.goal}`}
        progress={burn.total / burn.goal}
      />
      <ProgressCard
        title={`${t('consumedKcal')}: ${intake.total}/${intake.goal}`}
        progress={intake.total / intake.goal}
      />
    </ScrollView>
  );
}
