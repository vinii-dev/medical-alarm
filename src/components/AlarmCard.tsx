import {
  Badge,
  Container,
  DeleteIcon,
  Flex,
  HStack,
  IconButton,
  Pressable,
  ScrollView,
  Text,
} from 'native-base';
import { useState } from 'react';

const WeekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

type AlarmType = {
  date: Date;
  weekDays: {
    [day in typeof WeekDays[number]]: boolean;
  };
};

export const AlarmCard = () => {
  const [activated, setActivated] = useState([
    true,
    true,
    false,
    true,
    false,
    true,
    true,
  ]);

  return (
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
        <Text fontSize={32} mb={1}>
          22:36
        </Text>
        <HStack space={1}>
          {WeekDays.map((day, i) => (
            <Badge
              variant={activated[i] ? 'subtle' : 'ghost'}
              rounded="full"
              _text={{ fontSize: 15 }}
            >
              {day.charAt(0)}
            </Badge>
          ))}
        </HStack>
      </Container>
      <IconButton
        size="md"
        rounded="md"
        _pressed={{ bg: 'red.300' }}
        icon={<DeleteIcon color="red.500" />}
      />
    </Flex>
  );
};
