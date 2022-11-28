import {
  AddIcon,
  Button,
  Flex,
  FormControl,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { AlarmCard } from '../components/AlarmCard';
import { Input } from '../components/Input';
import { Modal } from '../components/DeviceForm/Modal';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export const DeviceForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alarmList, setAlarmList] = useState();

  return (
    <Flex padding={4} justifyContent="space-between" height="full">
      <VStack space={4}>
        <FormControl>
          <Input labelName="Nome" placeholder="Ex.: Remédios da Mãez" />
        </FormControl>
        <FormControl>
          <Input
            labelName="Código do sensor"
            placeholder="Ex.: 573727bf-82bb-49cd-819b-f82f8312f357"
            InputhtElement={<IconButton />}
          />
        </FormControl>
        <FormControl>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDir="row"
          >
            <FormControl.Label _text={{ bold: true, fontSize: 16 }}>
              Alarmes
            </FormControl.Label>
            <Text color="muted.400">1/3</Text>
          </Flex>
          <VStack my={1} space={2}>
            {[''].map(() => {
              return <AlarmCard />;
            })}
          </VStack>
          <IconButton
            onPress={() => setIsModalOpen(true)}
            mt={1}
            variant="ghost"
            icon={<AddIcon size="sm" />}
          />
        </FormControl>
        <RNDateTimePicker value={new Date()} mode="time" />
      </VStack>
      <Button>Cadastrar</Button>
    </Flex>
  );
};
