import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {
  Badge,
  Box,
  Button,
  Container,
  DeleteIcon,
  Flex,
  HStack,
  IconButton,
  Pressable,
  ScrollView,
  Text,
} from 'native-base';
import { Dispatch, useState } from 'react';

const WeekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

export type AlarmType = {
  date: Date;
  weekDays: {
    [day in typeof WeekDays[number]]: boolean;
  };
};

type AlarmCardProps = {
  alarm: AlarmType;
  onDeletePress: () => void;
  setAlarm: (alarm: AlarmType) => void;
};

export const AlarmCard = ({
  alarm,
  setAlarm,
  onDeletePress,
}: AlarmCardProps) => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const handleWeekDayPress = (
    day: typeof WeekDays[number],
    isActivated: boolean
  ) => {
    setAlarm({ ...alarm, weekDays: { ...alarm.weekDays, [day]: isActivated } });
  };

  const handleDateTimeChange = (e: DateTimePickerEvent, date?: Date) => {
    setShowDateTimePicker(false);

    if (date && e.type === 'set') {
      setAlarm({ ...alarm, date });
    }
  };

  const time = alarm.date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <Flex
        py={2}
        pl={4}
        pr={2}
        borderColor="coolGray.300"
        borderWidth={1}
        rounded="2xl"
        maxWidth="full"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
      >
        <Container>
          <Text
            fontSize={32}
            mb={1}
            onPress={() => setShowDateTimePicker(true)}
          >
            {time}
          </Text>
          <HStack space={1}>
            {Object.entries(alarm.weekDays).map(([day, activated], i) => (
              <Pressable onPress={() => handleWeekDayPress(day, !activated)}>
                <Badge
                  variant={activated ? 'subtle' : 'ghost'}
                  rounded="full"
                  _text={{ fontSize: 16 }}
                >
                  {day.charAt(0)}
                </Badge>
              </Pressable>
            ))}
          </HStack>
        </Container>
        <IconButton
          size="md"
          rounded="md"
          _pressed={{ bg: 'red.300' }}
          onPress={onDeletePress}
          icon={<DeleteIcon color="red.500" />}
        />
      </Flex>
      {showDateTimePicker && (
        <RNDateTimePicker
          value={new Date()}
          onChange={handleDateTimeChange}
          mode="time"
        />
      )}
    </>
  );
};
