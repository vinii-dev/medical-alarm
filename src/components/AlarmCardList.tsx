import {
  AddIcon,
  Flex,
  FormControl,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, { Dispatch } from 'react';
import { createInitialAlarm } from '../utils/alarmUtils';
import { AlarmCard, AlarmType } from './AlarmCard';

type AlarmCardListProps = {
  alarmList: AlarmType[];
  setAlarmList: Dispatch<React.SetStateAction<AlarmType[]>>;
};

export const AlarmCardList = ({
  alarmList,
  setAlarmList,
}: AlarmCardListProps) => {
  const handleSetAlarm = (idx: number, newAlarm: AlarmType) => {
    alarmList[idx] = newAlarm;
    setAlarmList(alarmList.map((alarm, i) => (i === idx ? newAlarm : alarm)));
  };

  const handleAddAlarm = () => {
    setAlarmList([...alarmList, createInitialAlarm()]);
  };

  const handleDelete = (idx: number) => {
    if (alarmList.length !== 1)
      setAlarmList(alarmList.filter((_, i) => i !== idx));
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" flexDir="row">
        <FormControl.Label _text={{ bold: true, fontSize: 16 }}>
          Alarmes
        </FormControl.Label>
        <Text color="muted.400">{alarmList.length}/3</Text>
      </Flex>
      <VStack my={1} space={2}>
        {alarmList.map((alarm, i) => {
          return (
            <AlarmCard
              key={alarm.date.getTime()}
              alarm={alarm}
              onDeletePress={() => handleDelete(i)}
              setAlarm={(alarm) => handleSetAlarm(i, alarm)}
            />
          );
        })}
      </VStack>
      {alarmList.length < 3 && (
        <IconButton
          onPress={handleAddAlarm}
          mt={1}
          variant="ghost"
          icon={<AddIcon size="sm" />}
        />
      )}
    </>
  );
};
